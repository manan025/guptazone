let name = document.getElementById("user_name");
// name.innerText = supabase.auth.currentUser.user_metadata.firstName;
// display each character of name one by one
let i = 0;
let name_interval = setInterval(function() {
    name.innerText += supabase.auth.currentUser.user_metadata.firstName[i];
    i++;
    if (i >= supabase.auth.currentUser.user_metadata.firstName.length) {
        clearInterval(name_interval);
    }
}, 200);
