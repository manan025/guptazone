const data = supabase.from('employees')
    .select()
    .then((data) => {
        // put data in the table
        let table = document.getElementById("employeeTable");
        // make table with data
        const emp = data.data;
        for (let i = emp.length - 1; i > -1; i--) {
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
        }
        table.style.fontSize = "12px";
        loadDetails();
    })

const assignID = () => {
    // random number
    supabase.from('customers')
        .select()
        .then((data) => {
            const id = Math.floor(Math.random() * 1000000);
            let customer = data.data;
            for (let i = 0; i < customer.length; i++) {
                if (customer[i].id === id) {
                    assignID();
                }
            }
            document.getElementById("id").value = id;
        })
    return Math.floor(Math.random() * 1000000);
}

function addEmployee() {
    const data = supabase.from('employees')
        .insert([{
            id: assignID(),
            name: document.getElementById("name").value,
            salary: document.getElementById("salary").value,
            role: document.getElementById("role").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value
        }])
        .then((data) => {
            // put data in the table
            var table = document.getElementById("employeeTable");
            // make table with data
            const emp = data.data;
            for (let i = emp.length - 1; i > -1; i--) {
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
            }
            table.style.fontSize = "12px";
        })
}

function deleteEmployee() {
    const data = supabase.from('employees')
        .delete()
        .match({id: document.getElementById("id").value})
        .then(() => {
            window.location.reload();
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
            username: document.getElementById("username").value
        })
        .match({id: document.getElementById("id").value})
        .then((data) => {
            window.location.reload();
        })
}

function loadDetails() {
    const table = document.getElementById("employeeTable");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            var rowIndex = this.rowIndex;
            var id = table.rows[rowIndex].cells[0].innerHTML;
            var salary = table.rows[rowIndex].cells[1].innerHTML;
            var role = table.rows[rowIndex].cells[2].innerHTML;
            var number = table.rows[rowIndex].cells[3].innerHTML;
            var name = table.rows[rowIndex].cells[4].innerHTML;
            var email = table.rows[rowIndex].cells[5].innerHTML;
            var username = table.rows[rowIndex].cells[6].innerHTML;

            document.getElementById("id").value = id;
            document.getElementById("salary").value = salary;
            document.getElementById("role").value = role;
            document.getElementById("number").value = number;
            document.getElementById("name").value = name;
            document.getElementById("email").value = email;
            document.getElementById("username").value = username;
        }
    }
}
