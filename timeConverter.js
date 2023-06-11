let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");
let errormsg = "Please enter the valid number";

function function1() {
    let hours = hoursInputEl.value;
    let minutes = minutesInputEl.value;
    if (hours === "" || minutes === "") {
        errorMsgEl.textContent = errormsg;
        console.log('hi');
    } else {
        let intHours = parseInt(hours);
        let intMinutes = parseInt(minutes);
        let result = intHours * 3600 + intMinutes * 60;
        errorMsgEl.textContent = "";
        timeInSecondsEl.textContent = result + "s";
    }
}
convertBtnEl.addEventListener("click", function1);