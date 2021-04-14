// get a reference to the sms or call radio buttons
var callSettingsElem = document.querySelector('.callTotalSettings')
var smsSettingsElem = document.querySelector('.smsTotalSettings')
var totalSettingElem = document.querySelector('.totalSettings')
// get refences to all the settings fields
var callTotalCostElem = document.querySelector('.callCostSetting')
var smsTotalCostElem = document.querySelector('.smsCostSetting')
var criticalLevelElem = document.querySelector('.criticalLevelSetting')
var warningLevelElem = document.querySelector('.warningLevelSetting')
//get a reference to the add button
var addBtn = document.querySelector('.addedBtn')
//get a reference to the 'Update settings' button
var updateBtn = document.querySelector('.updateSettings')
// create a variables that will keep track of all the settings
var smsTotalCostSetting = 0;
var callTotalCostSetting = 0;
var critcicalValueSetting = 0;
var warningValueSetting = 0;
// create a variables that will keep track of all three totals.
var smsTotal3 = 0;
var callTotal3 = 0;
var overallTotal3 = 0;
//add an event listener for when the 'Update settings' button is pressed
function settingTotal (){
smsTotalCostSetting = Number(smsTotalCostElem.value)
callTotalCostSetting = Number(callTotalCostElem.value) 
critcicalValueSetting = criticalLevelElem.value
warningValueSetting = warningLevelElem.value
console.log({smsTotalCostSetting});
}
updateBtn.addEventListener("click", settingTotal )

//add an event listener for when the add button is pressed
function addButtonSettings(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType1 = checkedRadioBtn.value

    

    if (billItemType1 === "call"){
        callTotal3 += callTotalCostSetting
    }
    else if (billItemType1 === "sms"){
        smsTotal3 += smsTotalCostSetting
    }
}
    

callSettingsElem.innerHTML = callTotal3.toFixed(2);
smsSettingsElem.innerHTML = smsTotal3.toFixed(2);
    overallTotal3 = callTotal3 + smsTotal3;
    totalSettingElem.innerHTML = overallTotal3.toFixed(2);

    if(overallTotal3 >= parseFloat(smsSettingsElem.value)){
        totalSettingElem.classList.add('danger')
        totalSettingElem.classList.remove('warning')
    }
    else if(overallTotal3 >= parseFloat(callSettingsElem.value) ) {
        totalSettingElem.classList.add('warning')
        totalSettingElem.classList.remove('danger')
        
    }
    
} 
addBtn.addEventListener("click", addButtonSettings )
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
