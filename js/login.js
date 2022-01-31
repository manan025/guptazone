var SUPABASE_URL = "https://sgynisobekfrtdbzwzvs.supabase.co";
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTQ1NTc5LCJleHAiOjE5NTg1MjE1Nzl9.ab7_Cr_sR4n0OsxXYqunBdG-tjAgrkrmqiqBjtFwTPc';
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


const user = supabase.auth.user()


if (user != null) {
    if (window.location.pathname === "/employee.html" && localStorage.getItem("type") === "employee") {
        auth = true;
    } else if (window.location.pathname === "/customer.html" && localStorage.getItem("type") === "customer") {
        auth = true;
    } else if (window.location.pathname === "/manager.html" && localStorage.getItem("type") === "manager") {
        auth = true;
    } else {
        auth = false;
    }
    if (auth) {
        document.getElementById("login_div").style.display = "none";
        document.getElementById("user_div").style.display = "block";
    }
} else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
}

function signup() {
    supabase.auth.signUp({email: "123@gmail.com", password: "12345678"});
    console.log("signup");
}

function login(type) {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    if (type === "") {
        alert("Technical Error. Please contact admin.");
        return;
    }
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
                    localStorage.setItem('type', "manager");
                    window.location.reload();
                } else if (type === "employee") {
                    localStorage.setItem('type', "employee");
                    redirect = "employeedashboard.html";
                } else if (type === "customer") {
                    localStorage.setItem('type', "customer");
                    redirect = "customerDashboard.html";
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

const isValidEmail = (email) => {
    if (email.length === 0) {
        return false;
    } else if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

function resetPassword() {
    var userEmail = document.getElementById("email_field").value;
    if (!isValidEmail(userEmail)) {
        alert("Invalid Email");
        return;
    }
    supabase.auth.api.resetPasswordForEmail(userEmail)
        .then((response) => {
            if (response.error) {
                alert(response.error.message);
            } else {
                alert("Password reset email sent");
            }
        })
        .catch((error) => {
            console.log(error);
            alert("Invalid credentials");
        });
}

function addEmployee() {
    window.location = "/addEmployee.html";
}

function logout() {
    const {error} = supabase.auth.signOut();
    window.location.reload();
}