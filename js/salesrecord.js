supabase.from('sales_record')
    .select()
    .then(data => {
        let table = document.getElementById('salesTable');
        const record = data.data;
        for (let i = record.length - 1; i > -1; i--) {
            let row = table.insertRow(1);
            let sales_id = row.insertCell(0);
            let customer_id = row.insertCell(1);
            let date = row.insertCell(2);
            let total_price = row.insertCell(3);
            let discount = row.insertCell(4);
            let final_price = row.insertCell(5);
            let items = row.insertCell(6);
            let payment_status = row.insertCell(7);
            let payment_mode = row.insertCell(8);
            sales_id.innerHTML = record[i].sales_id;
            customer_id.innerHTML = record[i].customer_id;
            date.innerHTML = record[i].date;
            total_price.innerHTML = record[i].total_amount;
            discount.innerHTML = record[i].discount;
            final_price.innerHTML = record[i].final_amount;
            items.innerHTML = record[i].items;
            payment_status.innerHTML = record[i].payment_status;
            payment_mode.innerHTML = record[i].payment_method;
        }
    })

const addData = () => {
    let paid = false;
    if (document.getElementById('paid').checked) {
        paid = true;
    }

    let mode = "";
    if (document.getElementById('cash').checked) {
        mode = "cash";
    } else if (document.getElementById('card').checked) {
        mode = "card";
    } else if (document.getElementById('other').checked) {
        mode = "other";
    }
    let cont = true;
    if (!paid && mode.length > 0) {
        alert("Customer has not paid yet. Please pay first.");
        document.getElementById('cash').checked = false;
        document.getElementById('card').checked = false;
        document.getElementById('other').checked = false;
        cont = false;
    }

    const customer = document.getElementById('customer_id').value;
    supabase.from('customers')
        .select()
        .match({id: customer})
        .then(data => {
            if (data.data.length === 0) {
                alert("Customer not found");
                cont = false;
            }
        })
    if (!cont) {
        return;
    }
    supabase.from('sales_record')
        .insert({
            sales_id: document.getElementById('sales_id').value,
            customer_id: document.getElementById('customer_id').value,
            date: (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear(),
            total_amount: document.getElementById('total_amount').value,
            discount: document.getElementById('discount').value,
            final_amount: document.getElementById('final_amount').value,
            items: document.getElementById('items').value,
            payment_status: paid ? 'paid' : 'unpaid',
            payment_method: mode
        })
        .then(data => {
            alert('Data inserted successfully');
            window.location.reload();
        })
}

function printData() {
    document.getElementById('form').style.display = 'none';
    window.print();
    document.getElementById('form').style.display = 'block';
}

// change final amount when discount is changed
const changeFinalAmount = () => {
    let discount = document.getElementById('discount').value / 100;
    let total_amount = document.getElementById('total_amount').value;
    let final = total_amount - (discount * total_amount);
    document.getElementById('final_amount').value = final;
}

// set listener for change in values
document.getElementById('discount').addEventListener('change', changeFinalAmount);
document.getElementById('total_amount').addEventListener('change', changeFinalAmount);

