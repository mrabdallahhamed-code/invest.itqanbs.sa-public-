-- ============================================================
-- إتقان لخدمات الأعمال — Supabase Schema
-- شغّل هذا الملف كاملاً في: Supabase Dashboard > SQL Editor > New query
-- ============================================================

-- ---------- الأنواع (Enums) ----------
create type user_role as enum ('client', 'provider', 'admin');
create type readiness_status as enum ('pending_review', 'ready', 'not_ready');
create type document_status as enum ('pending', 'verified', 'rejected');
create type request_status as enum ('open', 'offer_selected', 'in_progress', 'completed', 'cancelled');
create type offer_status as enum ('submitted', 'accepted', 'rejected');

-- ---------- profiles: كل مستخدم (عميل / مقدم خدمة / أدمن) ----------
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role user_role not null default 'client',
  phone text,
  created_at timestamptz not null default now()
);

-- ---------- clients: بيانات العميل المستثمر ----------
create table clients (
  id uuid primary key references profiles(id) on delete cascade,
  nationality text,
  company_name_abroad text,
  activity_type text,
  readiness_status readiness_status not null default 'pending_review',
  readiness_notes text,
  created_at timestamptz not null default now()
);

-- ---------- documents: مستندات العميل ----------
create table documents (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  doc_type text not null,          -- مثال: 'عقد التأسيس', 'جواز السفر', 'السجل التجاري الأجنبي'
  file_path text not null,         -- مسار الملف داخل Supabase Storage
  status document_status not null default 'pending',
  reviewed_by uuid references profiles(id),
  reviewed_at timestamptz,
  uploaded_at timestamptz not null default now()
);

-- ---------- service_providers: مقدمو الخدمة ----------
create table service_providers (
  id uuid primary key references profiles(id) on delete cascade,
  company_name text not null,
  specialty text,
  rating numeric(2,1) default 5.0,
  is_verified boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------- service_requests: طلب خدمة تأسيس مرتبط بعميل ----------
create table service_requests (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  status request_status not null default 'open',
  created_at timestamptz not null default now()
);

-- ---------- offers: عروض مقدمي الخدمة على الطلبات ----------
create table offers (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references service_requests(id) on delete cascade,
  provider_id uuid not null references service_providers(id) on delete cascade,
  price numeric(10,2) not null,
  duration_days int not null,
  status offer_status not null default 'submitted',
  created_at timestamptz not null default now()
);

-- ---------- readiness_checklist: بنود تجهيز ملف العميل غير الجاهز ----------
create table readiness_checklist (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  item text not null,              -- مثال: 'تعديل عقد التأسيس', 'استحواذ على الشركة الأجنبية'
  is_complete boolean not null default false,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- دالة مساعدة: هل المستخدم الحالي أدمن؟
-- ============================================================
create or replace function is_admin()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- ============================================================
-- تفعيل Row Level Security على كل الجداول
-- ============================================================
alter table profiles enable row level security;
alter table clients enable row level security;
alter table documents enable row level security;
alter table service_providers enable row level security;
alter table service_requests enable row level security;
alter table offers enable row level security;
alter table readiness_checklist enable row level security;

-- ---------- سياسات profiles ----------
create policy "read_own_profile" on profiles for select using (id = auth.uid() or is_admin());
create policy "update_own_profile" on profiles for update using (id = auth.uid());
create policy "insert_own_profile" on profiles for insert with check (id = auth.uid());

-- ---------- سياسات clients ----------
create policy "client_read_own" on clients for select using (id = auth.uid() or is_admin());
create policy "client_insert_own" on clients for insert with check (id = auth.uid());
create policy "client_update_own_or_admin" on clients for update using (id = auth.uid() or is_admin());

-- ---------- سياسات documents ----------
create policy "doc_client_read_own" on documents for select
  using (client_id = auth.uid() or is_admin());
create policy "doc_client_insert_own" on documents for insert
  with check (client_id = auth.uid());
create policy "doc_admin_update" on documents for update
  using (is_admin());

-- ---------- سياسات service_providers ----------
create policy "provider_public_read_verified" on service_providers for select
  using (is_verified = true or id = auth.uid() or is_admin());
create policy "provider_insert_own" on service_providers for insert
  with check (id = auth.uid());
create policy "provider_update_own_or_admin" on service_providers for update
  using (id = auth.uid() or is_admin());

-- ---------- سياسات service_requests ----------
-- العميل يشوف طلبه فقط، مقدم الخدمة يشوف الطلبات المفتوحة لعملاء "جاهزين" فقط، الأدمن يشوف كل شيء
create policy "request_client_read_own" on service_requests for select
  using (
    client_id = auth.uid()
    or is_admin()
    or (
      status = 'open'
      and exists (select 1 from clients c where c.id = client_id and c.readiness_status = 'ready')
      and exists (select 1 from service_providers sp where sp.id = auth.uid())
    )
  );
create policy "request_client_insert_own" on service_requests for insert
  with check (client_id = auth.uid());
create policy "request_update_own_or_admin" on service_requests for update
  using (client_id = auth.uid() or is_admin());

-- ---------- سياسات offers ----------
create policy "offer_read_related" on offers for select
  using (
    provider_id = auth.uid()
    or is_admin()
    or exists (select 1 from service_requests r where r.id = request_id and r.client_id = auth.uid())
  );
create policy "offer_provider_insert_own" on offers for insert
  with check (provider_id = auth.uid());
create policy "offer_update_related" on offers for update
  using (
    provider_id = auth.uid()
    or is_admin()
    or exists (select 1 from service_requests r where r.id = request_id and r.client_id = auth.uid())
  );

-- ---------- سياسات readiness_checklist ----------
create policy "checklist_read_own" on readiness_checklist for select
  using (client_id = auth.uid() or is_admin());
create policy "checklist_admin_write" on readiness_checklist for insert with check (is_admin());
create policy "checklist_admin_update" on readiness_checklist for update using (is_admin());

-- ============================================================
-- Storage: باكِت خاص لمستندات العملاء (يُنشأ يدوياً من Dashboard > Storage
-- باسم "client-documents" مع خيار Private، ثم فعّل السياسات التالية)
-- ============================================================
-- ملاحظة: نفّذ هذا الجزء بعد إنشاء الـ bucket من الواجهة
-- insert into storage.buckets (id, name, public) values ('client-documents', 'client-documents', false);

create policy "doc_storage_client_upload"
  on storage.objects for insert
  with check (bucket_id = 'client-documents' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "doc_storage_read"
  on storage.objects for select
  using (
    bucket_id = 'client-documents'
    and ((storage.foldername(name))[1] = auth.uid()::text or is_admin())
  );
