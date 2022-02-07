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
            var phone = row.insertCell(2);
            phone.innerHTML = customer[i].phone;
            var name = row.insertCell(3);
            name.innerHTML = customer[i].name;
            var email = row.insertCell(4);
            email.innerHTML = customer[i].email;
            var username = row.insertCell(5);
            username.innerHTML = customer[i].username;
        }
        table.style.fontSize = "12px";
        loadDetails();
    })


const assignID = () => {
    // random number
    // TODO: check if ID exists on supabase
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

function addCustomer() {
    const data = supabase.from('customers')
        .insert([{
            id: assignID(),
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            phone: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value
        }])
        .then((data) => {
            if (data.error) {
                alert(data.error.message);
            }
            window.location.reload();
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
                var phone = row.insertCell(2);
                phone.innerHTML = customer[i].phone;
                var name = row.insertCell(3);
                name.innerHTML = customer[i].name;
                var email = row.insertCell(4);
                email.innerHTML = customer[i].email;
                var username = row.insertCell(5);
                username.innerHTML = customer[i].username;
            }
            table.style.fontSize = "12px";
        })
}

function deleteCustomer() {
    const data = supabase.from('customers')
        .delete()
        .match({id: document.getElementById("id").value})
        .then((data) => {
            window.location.reload();
        })
}

function updateCustomer() {
    const data = supabase.from('customers')
        .update({
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            phone: document.getElementById("number").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value
        })
        .match({id: document.getElementById("id").value})
        .then ((data) => {
            window.location.reload();
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
                var phone = row.insertCell(2);
                phone.innerHTML = customer[i].phone;
                var name = row.insertCell(3);
                name.innerHTML = customer[i].name;
                var email = row.insertCell(4);
                email.innerHTML = customer[i].email;
                var username = row.insertCell(5);
                username.innerHTML = customer[i].username;
            }
            table.style.fontSize = "12px";
        })
}


// fill details by clicking on row
function loadDetails() {
    var table = document.getElementById("customerTable");
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {

            var rowIndex = this.rowIndex;
            var id = table.rows[rowIndex].cells[0].innerHTML;
            var dob = table.rows[rowIndex].cells[1].innerHTML;
            var phone = table.rows[rowIndex].cells[2].innerHTML;
            var name = table.rows[rowIndex].cells[3].innerHTML;
            var email = table.rows[rowIndex].cells[4].innerHTML;
            var username = table.rows[rowIndex].cells[5].innerHTML;
            // set the values in the form
            document.getElementById("id").value = id;
            document.getElementById("dob").value = dob;
            document.getElementById("number").value = phone;
            document.getElementById("name").value = name;
            document.getElementById("email").value = email;
            document.getElementById("username").value = username;
        }
    }
    // get details from each cell
}

