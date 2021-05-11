function textTotalBill () {
    var callTextTotal = 0;
    var smsTextTotal = 0;
    var theCallText = 0;
    var theSmsText = 0;
    var total = 0;


    function textBill (billTypeEntered) {
        
        if (billTypeEntered === "call"){
            theCallText += 2.75;
            total += 2.75;
        }
        else if (billTypeEntered === "sms"){
            theSmsText += 0.75;
            total += 0.75;
        }
    }
    function billTypeTotal (){
       return total;
    }
    function callTextTot() {
        if (!critLevelReached()){
        return callTextTotal += theCallText;
        }
    }
    function theSmsTextTot () {
        if (!critLevelReached()){
       return smsTextTotal += theSmsText;
        }
    }
    function getSmsTotal () {
        return theSmsText;
    }
    function getCallTotal (){
        return theCallText;
    }
    function warningReached(warningLev) {
        warnLevel = warningLev
    }
    function getWarning() {
        return warnLevel
    }
    function criticalReached(criticalLev) {
            critLevel = criticalLev
    }
    function getCritical() {
        return critLevel
    }
    function critLevelReached (){
        billTypeTotal() >= getCritical()
    }
    function totalClassName () {
    
       if ( billTypeTotal() >= 50) {
            return "danger"
        }
        else  if (billTypeTotal() >= 30) {
            return "warning"
        }
    }


    return {
        textBill,
        getSmsTotal,
        callTextTot,
        theSmsTextTot,
        billTypeTotal,
        getCallTotal,
        warningReached,
        getWarning,
        criticalReached,
        getCritical,
        totalClassName,
       
    }
}


