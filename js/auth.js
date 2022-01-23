var SUPABASE_URL = "https://sgynisobekfrtdbzwzvs.supabase.co";
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTQ1NTc5LCJleHAiOjE5NTg1MjE1Nzl9.ab7_Cr_sR4n0OsxXYqunBdG-tjAgrkrmqiqBjtFwTPc';
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


const user = supabase.auth.user();
if (user == null) {
    window.location.href = "index.html";
}