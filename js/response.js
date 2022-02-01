const data = supabase.from('survey')
    .select('selection')
    .match({email: supabase.auth.currentUser.email})
    .then(data => {
        if (data.data.length === 0) {
            alert("You have not yet taken the survey. Please take the survey before viewing your response.")
            document.getElementsById('location').style.display = 'none';
        } else {
            document.getElementById('location').style.display = 'block';
            let loc = "";
            if (data.data[0].selection === "delhi") {
                loc = "New Delhi";
            } else if (data.data[0].selection === "abudhabi") {
                loc = "Abu Dhabi";
            } else {
                loc = "Dubai"
            }
            document.getElementById('selected').innerHTML = loc;
        }
    })
    .catch(error => {
        alert(error.message);
    });