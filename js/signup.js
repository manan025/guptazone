var SUPABASE_URL = "https://sgynisobekfrtdbzwzvs.supabase.co";
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTQ1NTc5LCJleHAiOjE5NTg1MjE1Nzl9.ab7_Cr_sR4n0OsxXYqunBdG-tjAgrkrmqiqBjtFwTPc';
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const user = supabase.auth.user()

// checks if user is signed in
if (user != null) {
    window.location.href='customerDashboard.html';
}


// email validation
function validateEmail(email) {
    // check if email follows the format
    if ("" === email) {
        return false;
    } else if (!email.includes("@")) {
        return false;
    } else return email.includes(".");
}

function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dob = document.getElementById('dob').value;

    // customer data validation
    if (email === '' || password === '' || confirmPassword === '' || firstName === '' || lastName === '' || phoneNumber === '' || dob === '') {
        alert('Please fill in all fields');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    if (phoneNumber.length !== 10) {
        alert('Phone number must be 10 digits');
        return;
    }
    // check if email is valid
    if (!validateEmail(email)) {
        alert('Please enter a valid email');
        return;
    }
    console.log("validation passed")
    const data = supabase.auth.signUp({
        email: email,
        password: password
    }, {
        data: {
            username: username,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            dob: dob,
            type: "customer"
        }
    })
        .then(() => {
            console.log("signup success")
            const user = supabase.auth.user()
            console.log(user)
            addDB(email, password, firstName, lastName, phoneNumber, dob, username);
        })

}

const randomNumber = () => {
    return Math.floor(Math.random() * 1000000) + 1;
}

// database creation for user on signup
function addDB(email, password, firstName, lastName, phoneNumber, dob, username) {
    console.log("addDB")
    console.log(firstName + " " + lastName)
    const data = supabase
        .from('customers')
        .insert([{
            id: randomNumber(),
            email: email,
            password: password,
            name: firstName + ' ' + lastName,
            phone: phoneNumber,
            dob: dob,
            username: username
        }])
        .then(() => {
            alert('Account created successfully, please verify your email.');
            window.location.href = 'customer.html';
        })
}
