/*var SUPABASE_URL = "https://sgynisobekfrtdbzwzvs.supabase.co";
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTQ1NTc5LCJleHAiOjE5NTg1MjE1Nzl9.ab7_Cr_sR4n0OsxXYqunBdG-tjAgrkrmqiqBjtFwTPc';
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);*/

const data = supabase.from('employees')
    .select()
    .then((data) => {
        // put data in the table
        var table = document.getElementById("employeeTable");
        // make table with data
        const emp = data.data;
        for (let i = emp.length-1; i > -1; i--) {
            // start from first cell of 2nd row
            var row = table.insertRow(1);
            var id = row.insertCell(0);
            id.innerHTML = emp[i].id;
            var salary = row.insertCell(1);
            salary.innerHTML = emp[i].salary;
            var role = row.insertCell(2);
            role.innerHTML = emp[i].role.toString();
            var number = row.insertCell(3);
            number.innerHTML = emp[i].number;
            var name = row.insertCell(4);
            name.innerHTML = emp[i].name;
            var email = row.insertCell(5);
            email.innerHTML = emp[i].email;
            var username = row.insertCell(6);
            username.innerHTML = emp[i].username;
            var password = row.insertCell(7);
            password.innerHTML = emp[i].password;
        }
        table.style.fontSize = "12px";
    })

function addEmployee() {
    const data = supabase.from('employees')
        .insert([{
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            salary: document.getElementById("salary").value,
            role: document.getElementById("role").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }])
        .then((data) => {
            // put data in the table
            var table = document.getElementById("employeeTable");
            // make table with data
            const emp = data.data;
            for (let i = emp.length-1; i > -1; i--) {
                // start from first cell of 2nd row
                var row = table.insertRow(1);
                var id = row.insertCell(0);
                id.innerHTML = emp[i].id;
                var salary = row.insertCell(1);
                salary.innerHTML = emp[i].salary;
                var role = row.insertCell(2);
                role.innerHTML = emp[i].role.toString();
                var number = row.insertCell(3);
                number.innerHTML = emp[i].number;
                var name = row.insertCell(4);
                name.innerHTML = emp[i].name;
                var email = row.insertCell(5);
                email.innerHTML = emp[i].email;
                var username = row.insertCell(6);
                username.innerHTML = emp[i].username;
                var password = row.insertCell(7);
                password.innerHTML = emp[i].password;
            }
            table.style.fontSize = "12px";
        })
}

function deleteEmployee() {
    const data = supabase.from('employees')
        .delete()
        .match({id: document.getElementById("id").value})
        .then((data) => {
            // put data in the table
            var table = document.getElementById("employeeTable");
            // make table with data
            const emp = data.data;
            for (let i = emp.length-1; i > -1; i--) {
                // start from first cell of 2nd row
                var row = table.insertRow(1);
                var id = row.insertCell(0);
                id.innerHTML = emp[i].id;
                var salary = row.insertCell(1);
                salary.innerHTML = emp[i].salary;
                var role = row.insertCell(2);
                role.innerHTML = emp[i].role.toString();
                var number = row.insertCell(3);
                number.innerHTML = emp[i].number;
                var name = row.insertCell(4);
                name.innerHTML = emp[i].name;
                var email = row.insertCell(5);
                email.innerHTML = emp[i].email;
                var username = row.insertCell(6);
                username.innerHTML = emp[i].username;
                var password = row.insertCell(7);
                password.innerHTML = emp[i].password;
            }
            table.style.fontSize = "12px";
        })
}

function updateEmployee() {
    const data = supabase.from('employees')
        .update({
            name: document.getElementById("name").value,
            salary: document.getElementById("salary").value,
            role: document.getElementById("role").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
        .match({id: document.getElementById("id").value})
        .then ((data) => {
            // put data in the table
            var table = document.getElementById("employeeTable");
            for (let i = table.rows.length - 1; i > 0; i--) {
                table.deleteRow(i);
            }

            const emp = data.data;
            for (let i = emp.length-1; i > -1; i--) {
                // start from first cell of 2nd row
                var row = table.insertRow(1);
                var id = row.insertCell(0);
                id.innerHTML = emp[i].id;
                var salary = row.insertCell(1);
                salary.innerHTML = emp[i].salary;
                var role = row.insertCell(2);
                role.innerHTML = emp[i].role.toString();
                var number = row.insertCell(3);
                number.innerHTML = emp[i].number;
                var name = row.insertCell(4);
                name.innerHTML = emp[i].name;
                var email = row.insertCell(5);
                email.innerHTML = emp[i].email;
                var username = row.insertCell(6);
                username.innerHTML = emp[i].username;
                var password = row.insertCell(7);
                password.innerHTML = emp[i].password;
            }
            table.style.fontSize = "12px";
        })
}
