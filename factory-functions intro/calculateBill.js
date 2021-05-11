function calculateBill() {
   
    function billString(totalBill) {
        var billTotal = 0;
        var billItems = totalBill.split(",");
        var totalBillOne = 0;

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
                totalBillOne += 2.75
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
                totalBillOne += 0.75
            }
        }
        return billTotal
    }
   
    function critClassName(totalBill) {

        if (billString(totalBill) >= 30) {
            return "danger"
        }
        else  if (billString(totalBill) >= 20) {
            return "warning"
        }
    }

  

    return {
        billString,       
        critClassName   
    }
}



