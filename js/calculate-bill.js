//get a reference to the calculate button
var calculateBtnElem = document.querySelector('.calculateBtn')
//get a reference to the billTotal element
var billTotalElem = document.querySelector('.billTotal')

//get a reference to the billString
var billStringElem = document.querySelector('.billString')

var calculateBillInstance = calculateBill();
//create the function that will be called when the calculate button is pressed
function calculateBillTotal() {

    billTotalElem.classList.remove('danger')
    billTotalElem.classList.remove('warning')
   
    
     var billString2 = billStringElem.value;
  
    billTotalElem.innerHTML = calculateBillInstance.billString(billString2).toFixed(2);

   
    
    billTotalElem.classList.add(calculateBillInstance.critClassName(billString2))
   
}

//link the function to a click event on the calculate button
calculateBtnElem.addEventListener('click', calculateBillTotal)