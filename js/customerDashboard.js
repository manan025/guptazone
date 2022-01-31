let name = document.getElementById("user_name");
name.innerText = supabase.auth.currentUser.firstName;