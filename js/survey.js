function submitSurvey() {
    let location1 = document.getElementById("lc1").value;
    let location2 = document.getElementById("lc2").value;
    let location3 = document.getElementById("lc3").value;
    // check which location is selected
    if (location1 === "" && location2 === "" && location3 === "") {
        alert("Please select at least one location");
        return;
    } else {
        const data = supabase.from("survey")
    }
}