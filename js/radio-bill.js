// get a reference to the sms or call radio buttons
var callTotalElemTwo = document.querySelector('.callTotalTwo')
var smsTotalElemTwo = document.querySelector('.smsTotalTwo')
//get a reference to the add button
var addBtnElemTwo = document.querySelector('.radioBillAddBtn')
var billTypeElemTwo = document.querySelector('.billItemTypeRadio')


var totalCostElemTwo = document.querySelector('.totalTwo')


//create a variable that will keep track of the total bill
var callTotal2 = 0;
var smsTotal2 = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
    totalCostElemTwo.classList.remove('warning')
    totalCostElemTwo.classList.remove('danger')

 // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemTypeTwo = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    // update the correct total
    if (billItemTypeTwo === "call"){
        callTotal2 += 2.75
    }
    else if (billItemTypeTwo === "sms"){
        smsTotal2 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalElemTwo.innerHTML = callTotal2.toFixed(2);
    smsTotalElemTwo.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callTotal2 + smsTotal2;
    totalCostElemTwo.innerHTML = totalCost2.toFixed(2);

    if(totalCost2 >= 50){
        totalCostElemTwo.classList.add('danger')
    }
    else if(totalCost2 >= 30 ) {
        totalCostElemTwo.classList.add('warning')
    }
}
addBtnElemTwo.addEventListener("click", radioBillTotal)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
