var SUPABASE_URL = "https://sgynisobekfrtdbzwzvs.supabase.co";
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTQ1NTc5LCJleHAiOjE5NTg1MjE1Nzl9.ab7_Cr_sR4n0OsxXYqunBdG-tjAgrkrmqiqBjtFwTPc';
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


const user = supabase.auth.user()


if (user != null) {
    // remove login button
    document.getElementById("login_div").style.display = "none";
    document.getElementById("user_div").style.display = "block";
} else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
}

function signup() {
    supabase.auth.signUp({email: "sample@gmail.com", password: "12345678"});
    console.log("signup");
}

function login(type) {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    supabase.auth.signIn({email: userEmail, password: userPass})
        .then((response) => {
            if (response.error) {
                alert(response.error.message);
            } else {
                console.log(response);
                localStorage.setItem('user', response.user.email);
                let redirect = "";
                if (type === "manager") {
                    // redirect = "managerdashboard.html";
                    window.location.reload();
                } else if (type === "employee") {
                    redirect = "employeedashboard.html";
                } else if (type === "customer") {
                    redirect = "customerdashboard.html";
                } else {
                    redirect = "index.html";
                }
                window.location.href = redirect;
            }
        })
        .catch((error) => {
            console.log(error);
            alert("Invalid Credentials");
        });
}

function addEmployee() {
    window.location = "/addEmployee.html";
}

function logout() {
    const {error} = supabase.auth.signOut();
    window.location.reload();
}