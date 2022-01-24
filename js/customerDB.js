/*var SUPABASE_URL = "https://sgynisobekfrtdbzwzvs.supabase.co";
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTQ1NTc5LCJleHAiOjE5NTg1MjE1Nzl9.ab7_Cr_sR4n0OsxXYqunBdG-tjAgrkrmqiqBjtFwTPc';
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);*/

const data = supabase.from('customers')
    .select()
    .then((data) => {
        // put data in the table
        var table = document.getElementById("customerTable");
        // make table with data
        const customer = data.data;
        for (let i = customer.length-1; i > -1; i--) {
            // start from first cell of 2nd row
            var row = table.insertRow(1);
            var id = row.insertCell(0);
            id.innerHTML = customer[i].id;
            var dob = row.insertCell(1);
            dob.innerHTML = customer[i].dob;
            var number = row.insertCell(2);
            number.innerHTML = customer[i].number;
            var name = row.insertCell(3);
            name.innerHTML = customer[i].name;
            var email = row.insertCell(4);
            email.innerHTML = customer[i].email;
            var username = row.insertCell(5);
            username.innerHTML = customer[i].username;
            var password = row.insertCell(6);
            password.innerHTML = customer[i].password;
        }
        table.style.fontSize = "12px";
    })

function addEmployee() {
    const data = supabase.from('customers')
        .insert([{
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }])
        .then((data) => {
            // put data in the table
            var table = document.getElementById("customerTable");
            // make table with data
            const customer = data.data;
            for (let i = customer.length-1; i > -1; i--) {
                // start from first cell of 2nd row
                var row = table.insertRow(1);
                var id = row.insertCell(0);
                id.innerHTML = customer[i].id;
                var dob = row.insertCell(1);
                dob.innerHTML = customer[i].dob;
                var number = row.insertCell(2);
                number.innerHTML = customer[i].number;
                var name = row.insertCell(3);
                name.innerHTML = customer[i].name;
                var email = row.insertCell(4);
                email.innerHTML = customer[i].email;
                var username = row.insertCell(5);
                username.innerHTML = customer[i].username;
                var password = row.insertCell(6);
                password.innerHTML = customer[i].password;
            }
            table.style.fontSize = "12px";
        })
}

function deleteEmployee() {
    const data = supabase.from('customers')
        .delete()
        .match({id: document.getElementById("id").value})
        .then((data) => {
            // put data in the table
            var table = document.getElementById("customerTable");
            // make table with data
            const customer = data.data;
            for (let i = customer.length-1; i > -1; i--) {
                // start from first cell of 2nd row
                var row = table.insertRow(1);
                var id = row.insertCell(0);
                id.innerHTML = customer[i].id;
                var dob = row.insertCell(1);
                dob.innerHTML = customer[i].dob;
                var number = row.insertCell(2);
                number.innerHTML = customer[i].number;
                var name = row.insertCell(3);
                name.innerHTML = customer[i].name;
                var email = row.insertCell(4);
                email.innerHTML = customer[i].email;
                var username = row.insertCell(5);
                username.innerHTML = customer[i].username;
                var password = row.insertCell(6);
                password.innerHTML = customer[i].password;
            }
            table.style.fontSize = "12px";
        })
}

function updateEmployee() {
    const data = supabase.from('customers')
        .update({
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
        .match({id: document.getElementById("id").value})
        .then ((data) => {
            // put data in the table
            var table = document.getElementById("customerTable");

            const customer = data.data;
            for (let i = customer.length-1; i > -1; i--) {
                // start from first cell of 2nd row
                var row = table.insertRow(1);
                var id = row.insertCell(0);
                id.innerHTML = customer[i].id;
                var dob = row.insertCell(1);
                dob.innerHTML = customer[i].dob;
                var number = row.insertCell(2);
                number.innerHTML = customer[i].number;
                var name = row.insertCell(3);
                name.innerHTML = customer[i].name;
                var email = row.insertCell(4);
                email.innerHTML = customer[i].email;
                var username = row.insertCell(5);
                username.innerHTML = customer[i].username;
                var password = row.insertCell(6);
                password.innerHTML = customer[i].password;
            }
            table.style.fontSize = "12px";
        })
}