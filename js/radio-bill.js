// get a reference to the sms or call radio buttons
var callTotalElem = document.querySelector('.callTotalTwo')
var smsTotalElem = document.querySelector('.smsTotalTwo')
//get a reference to the add button
var addBtnElem = document.querySelector('.radioBillAddBtn')
var billTypeElem = document.querySelector('.billItemTypeRadio')


var totalCostElem = document.querySelector('.totalTwo')


//create a variable that will keep track of the total bill
var callTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    // update the correct total
    if (billItemType === "call"){
        callTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalElem.innerHTML = callTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost2 = callTotal + smsTotal;
    totalCostElem.innerHTML = totalCost2.toFixed(2);

    if(totalCost2 >= 50){
        totalCostElem.classList.add('danger')
        totalCostElem.classList.remove('warning')
    }
    else if(totalCost2 >= 30 ) {
        totalCostElem.classList.add('warning')
        totalCostElem.classList.remove('danger')
    }
}
addBtnElem.addEventListener("click", radioBillTotal)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
