// get a reference to the sms or call radio buttons
var callSettingsElem = document.querySelector('.callTotalSettings')
var smsSettingsElem = document.querySelector('.smsTotalSettings')
var totalSettingElem = document.querySelector('.totalSettings')
var callTotalCostElem = document.querySelector('.callCostSetting')
var smsTotalCostElem = document.querySelector('.smsCostSetting')
var criticalLevelElem = document.querySelector('.criticalLevelSetting')
var warningLevelElem = document.querySelector('.warningLevelSetting')
var addBtn = document.querySelector('.addedBtn')
var updateBtn = document.querySelector('.updateSettings')


var settingsBillInstance = BillWithSettings()

function settingTotal (){
settingsBillInstance.setSmsCost(Number(smsTotalCostElem.value))
settingsBillInstance.setCallCost( Number(callTotalCostElem.value))
settingsBillInstance.setCriticalLevel(criticalLevelElem.value)
settingsBillInstance.setWarningLevel(warningLevelElem.value)
addAndRemoveClasses()
}
updateBtn.addEventListener("click", settingTotal )

function addButtonSettings(){
 

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

 if(settingsBillInstance.getTotalCost() < settingsBillInstance.getCriticalLevel()){
    if (checkedRadioBtn){
        var billItemType1 = checkedRadioBtn.value

    

    if (billItemType1 === "call"){
        settingsBillInstance.makeCall()
    }
    else if (billItemType1 === "sms"){
        settingsBillInstance.sendSms()
    }
}

 }
    

callSettingsElem.innerHTML = (settingsBillInstance.getTotalCallCost()).toFixed(2);
smsSettingsElem.innerHTML =(settingsBillInstance.getTotalSmsCost()).toFixed(2);
    totalSettingElem.innerHTML =(settingsBillInstance.getTotalCost()).toFixed(2);
    addAndRemoveClasses()
  
} 

function addAndRemoveClasses(){
    totalSettingElem.classList.remove('warning')
    totalSettingElem.classList.remove('danger')


    totalSettingElem.classList.add(settingsBillInstance.getWarningLevelClassName())
    totalSettingElem.classList.add(settingsBillInstance.totalClassName())

    

   
}

addBtn.addEventListener("click", addButtonSettings )
