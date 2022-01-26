function validateEmail(email) {
    // check if email follows the format
    if ("" === email) {
        return false;
    } else if (!email.includes("@")) {
        return false;
    } else return email.includes(".");
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dob = document.getElementById('dob').value;
    // form validation
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
    const data = supabase.auth.signUp({
        email: email,
        password: password
    }, {
        data: {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        }
    })
        .then(() => {
            addDB(email, password, firstName, lastName, phoneNumber, dob);
        })
}

function addDB(email, password, firstName, lastName, phoneNumber, dob) {
    const data = supabase
        .from('customers')
        .insert([{
            email: email,
            password: password,
            name: firstName + ' ' + lastName,
            phone: phoneNumber,
            dob: dob
        }])
        .then(() => {
            alert('Account created successfully, please verify your email.');
            window.location.href = 'customer.html';
        })
}
