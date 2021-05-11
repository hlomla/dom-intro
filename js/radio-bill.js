// get a reference to the sms or call radio buttons
var callTotalElemTwo = document.querySelector('.callTotalTwo')
var smsTotalElemTwo = document.querySelector('.smsTotalTwo')
//get a reference to the add button
var addBtnElemTwo = document.querySelector('.radioBillAddBtn')
var billTypeElemTwo = document.querySelector('.billItemTypeRadio')
var totalCostElemTwo = document.querySelector('.totalTwo')

var radioBillInstance = radioBtnBill()

function radioBillTotal(){

    radioBillInstance.radioBillTotal(billTypeElemTwo.value)

        
    //update the totals that is displayed on the screen.
    callTotalElemTwo.innerHTML = radioBillInstance.getCallRadioTot().toFixed(2);
    smsTotalElemTwo.innerHTML = radioBillInstance.getSmsRadioTot().toFixed(2);
    totalCostElemTwo.innerHTML = radioBillInstance.radioTotal().toFixed(2);

    totalCostElemTwo.classList.remove('warning')
    totalCostElemTwo.classList.remove('danger')
    totalCostElem.classList.add(radioBillInstance.criticalClassName())

}
addBtnElemTwo.addEventListener("click", radioBillTotal)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
