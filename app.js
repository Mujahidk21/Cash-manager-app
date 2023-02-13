const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const idButton = document.querySelector("#id-button");
// const nextButton = document.querySelector(".next-button");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// nextButton.addEventListener("click", handlenextButton);
checkButton.addEventListener("click", validateBillAndCashAmount);

//add next func later
// function handlenextButton() {
//     hidemessage();
//     let billAmount = parseInt(billAmount);
//     if (!Number.isInteger(billAmount)) {
//         showMessage("enter valid amt");
//     } else if (billAmount > 0) {
//         document.querySelector(".cash-given").style.display = "block";
//         document.querySelector(".check-button").style.display = "inline-block";
//         nextButton.style.display = "none";
//     } else if (billAmount > 0); {
//         showMessage("bill  >  0");
//     }
// }


function validateBillAndCashAmount() {
    hidemessage();
    if (billAmount.value > 0) {
        if (billAmount.value > cashGiven.value) {
            showMessage("you need to pay more ! Bill amt > Cash Given");
        } else if (billAmount.value == cashGiven.value) {
            showMessage("you are good to go ! Bill amt = Cash Given");
        } else {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
    } else {
        showMessage("Your bill amount should be greater than 0")
    }
};

function calculateChange(amountToBeReturned) {
    idButton.innerText = "Change to be returned " + amountToBeReturned;
    for (let i = 0; i < availableNotes.length; i++) {
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hidemessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}