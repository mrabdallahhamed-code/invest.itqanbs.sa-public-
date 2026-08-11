const SUPABASE_URL = "https://fpjaupjwikaaxehcqprk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_b_EiVWdAwTJDk-IGufOEBw_AzUMObDT";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
