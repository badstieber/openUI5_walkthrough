sap.ui.define([], function () {
    "use strict";

    return {
        statusText: function (sStatus) {
            const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            let displayStatus = "";
            switch (sStatus) {
                case "A":
                    displayStatus = resourceBundle.getText("invoiceStatusA");
                    break;
                case "B":
                    displayStatus = resourceBundle.getText("invoiceStatusB");
                    break;
                case "C":
                    displayStatus = resourceBundle.getText("invoiceStatusC");
                    break;
                default:
                    displayStatus = sStatus;
                    break;
            }

            return displayStatus;
        }
    }
})