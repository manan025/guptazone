function submitSurvey() {
    let location1 = document.getElementById("lc1");
    let location2 = document.getElementById("lc2");
    let location3 = document.getElementById("lc3");
    // check which location is selected
    if (!location1.checked && !location2.checked && !location3.checked) {
        alert("Please select at least one location");
        return;
    }
    let submitted = false;
    const ids = supabase.from('survey')
        .select('email')
        .then(data => {
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].email === supabase.auth.currentUser.email) {
                    alert('You have already submitted the survey');
                    submitted = true;
                    break;
                }
            }
            if (!submitted) {
                insertData();
            }
        })
}

function insertData() {
    let location1 = document.getElementById("lc1");
    let location2 = document.getElementById("lc2");
    let location3 = document.getElementById("lc3");
    let location = "";
    if (location1.checked) {
        location = location1.value;
    }
    if (location2.checked) {
        location = location2.value;
    }
    if (location3.checked) {
        location = location3.value;
    }
    const data = supabase.from("survey")
        .insert([{
            email: supabase.auth.currentUser.email,
            selection: location
        }])
        .then(data => {
            console.log(data);
            alert("Thank you for your feedback!");
            // window.location.href = "index.html";
        })
}
