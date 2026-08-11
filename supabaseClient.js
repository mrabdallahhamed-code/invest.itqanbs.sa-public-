// ============================================================
// إعداد الاتصال بـ Supabase
// عدّل القيمتين التاليتين من: Supabase Dashboard > Project Settings > API
// ============================================================
const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";      // مثال: https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_PUBLIC_KEY_HERE"; // آمن للاستخدام في المتصفح — الحماية عبر RLS

// لا تضع أبداً service_role key هنا أو في أي كود يعمل بالمتصفح
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- أدوات مساعدة عامة ----------
async function getCurrentProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  if (error) { console.error(error); return null; }
  return data;
}

async function requireRole(allowedRoles) {
  const profile = await getCurrentProfile();
  if (!profile || !allowedRoles.includes(profile.role)) {
    window.location.href = '/auth/login.html';
    return null;
  }
  return profile;
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/auth/login.html';
}
