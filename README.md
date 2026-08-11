# نشر invest.itqanbs.sa عبر GitHub Pages

هذا الريبو جاهز للاستضافة المجانية من GitHub نفسه (GitHub Pages) — بدون سيرفر منفصل، بدون SSH.

---

## الخطوات (بالترتيب، بالماوس فقط)

### 1) أنشئ ريبو جديد
- ادخل github.com بحسابك.
- اضغط **+** أعلى الصفحة > **New repository**.
- اسم الريبو: مثلاً `invest-itqanbs`.
- اختر **Public** (مطلوب لـ GitHub Pages المجاني).
- اضغط **Create repository**.

### 2) ارفع الملفات
- بعد إنشاء الريبو، ستشوف رابط **uploading an existing file** — اضغط عليه.
- اسحب وأفلت (Drag & Drop) كل الملفات والمجلدات الموجودة داخل هذه الحزمة (ما عدا مجلد `sql`، لا يُرفع — اشرحه بالأسفل).
- بالأسفل اكتب أي وصف بسيط، ثم اضغط **Commit changes**.

### 3) فعّل GitHub Pages
- داخل الريبو: **Settings** > من القائمة الجانبية **Pages**.
- تحت **Build and deployment > Source** اختر: **Deploy from a branch**.
- تحت **Branch** اختر: `main` والمجلد `/ (root)` ثم **Save**.
- انتظر دقيقة، بيظهر لك رابط مؤقت مثل: `https://username.github.io/invest-itqanbs`.

### 4) اربط الدومين الفرعي
- في نفس صفحة **Pages**: تحت **Custom domain** اكتب: `invest.itqanbs.sa` واضغط **Save**.
  (هذا تلقائياً يستخدم ملف `CNAME` الموجود بالحزمة).
- GitHub بيعطيك تنبيه DNS check in progress — طبيعي لين نضيف السجل بالخطوة الجاية.

### 5) أضف سجل DNS في دي-نت (D-Net)
- ادخل لوحة تحكم دي-نت > إدارة الدومين `itqanbs.sa` > DNS / Zone records.
- أضف سجل جديد نوعه **CNAME**:
  - **Host / Name:** `invest`
  - **Value / Target:** `username.github.io` (استبدل username باسم حسابك على GitHub — بدون اسم الريبو)
  - **TTL:** اتركه افتراضي
- احفظ. انتظر من 10 دقائق إلى ساعة لانتشار DNS.

### 6) فعّل HTTPS
- ارجع لصفحة **Pages** في الريبو بعد ما ينتشر DNS.
- فعّل خيار **Enforce HTTPS** (يظهر تلقائياً بعد نجاح ربط الدومين).

---

## 7) إعداد قاعدة البيانات (Supabase)
1. أنشئ مشروع مجاني في supabase.com.
2. من **SQL Editor**: الصق محتوى ملف `sql/schema.sql` (لا تُرفعه على GitHub — شغّله فقط داخل Supabase) واضغط Run.
3. من **Storage**: أنشئ bucket خاص (Private) باسم `client-documents`.
4. من **Project Settings > API**: انسخ `Project URL` و `anon public key`.
5. افتح ملف `assets/js/supabaseClient.js` في الريبو (زر القلم ✏️ للتعديل مباشرة من موقع GitHub) والصق القيمتين مكان النص الجاهز، ثم **Commit changes**.
6. الموقع بيتحدث تلقائياً خلال دقيقة تقريباً.

## 8) أنشئ أول حساب أدمن
- افتح `invest.itqanbs.sa/auth/register.html` وسجّل حساب.
- من Supabase > **Table Editor > profiles**: غيّر عمود `role` لهذا المستخدم إلى `admin`.
- سجّل دخول بنفس الحساب — بيوجهك تلقائياً للوحة الإدارة.

---

## ملاحظة مهمة
مجلد `sql/` **لا يُرفع لريبو GitHub الفعلي إذا حبيت** (لأنه ما يُستخدم في الموقع نفسه، فقط داخل Supabase) — لكن رفعه لن يسبب أي مشكلة أمنية، فقط احتفظ به كمرجع.
