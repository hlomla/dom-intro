var addBtnElem = document.querySelector('.addToBillBtn')

var billTypeElem = document.querySelector('.billTypeText')

var callsTotalElem = document.querySelector('.callTotalOne')
var smsTotalElem = document.querySelector('.smsTotalOne')
var totalCostElem = document.querySelector('.totalOne')


var textBillInstance = textTotalBill();

function textBillTotal(){
    
    textBillInstance.textBill(billTypeElem.value);

   
    callsTotalElem.innerHTML = textBillInstance.getCallTotal().toFixed(2);
    smsTotalElem.innerHTML = textBillInstance.getSmsTotal().toFixed(2);
    totalCostElem.innerHTML = textBillInstance.billTypeTotal().toFixed(2);


    totalCostElem.classList.remove('warning');
    totalCostElem.classList.remove('danger');
    totalCostElem.classList.add(textBillInstance.totalClassName())
   
}
addBtnElem.addEventListener("click", textBillTotal)
    