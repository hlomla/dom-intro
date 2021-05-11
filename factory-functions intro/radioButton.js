function radioBtnBill() {
    var callTotalTwo = 0;
    var theSmsTotalTwo = 0;
    
    function radioBillTotalTwo(billItemTypeTwo) {
        if (billItemTypeTwo === "call") {
            callTotalTwo += 2.75;
           
        }
        else if (billItemTypeTwo === "sms") {
            theSmsTotalTwo += 0.75;
            
        }
    }

    function radioTotal() {
        return theSmsTotalTwo + callTotalTwo;
    
    }
    function smsRadioTotal() { 
            return theSmsTotalTwo;
    }

    function callRadioTotal() {
            return callTotalTwo;
    }
  
    function warnReached(warningValue) {
        warnLevelValue = warningValue
    }
    function getWarningValue() {
        return warnLevelValue
    }
    function critReached(criticalValue) {
        critLevelValue = criticalValue
    }
    function getCriticalValue() {
        return critLevelValue
    }
    function critValueReached() {
        radioTotal() >= getCriticalValue()
    }
    function criticalClassName() {

        if (radioTotal() >= 50) {
            return "danger"
        }
        else if (radioTotal() >= 30) {
            return "warning"
        }
    }

 
    return {
        radioBillTotalTwo,
        radioTotal,
        smsRadioTotal,
        callRadioTotal,
        warnReached,
        getWarningValue,
        critReached,
        getCriticalValue,
        critValueReached,
        criticalClassName
        
    }
}