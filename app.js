const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-butto");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount () {
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("cash = bill amt");
        }
    } else {
         showMessage("invalid");
    }
    
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText= numberofNotes
    }
}
function hidemessage() {
    message.style.display = "none";
}
function showMessage(msg) {
      message.style.display = "block";
        message.innerText = msg;
    
}