sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("badstieber.walkthrough.controller.App", {

        /**
         * handles the button's press event by showing text
         */
        onShowHello: function () {
            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sWombatTheDude = this.getView().getModel().getProperty("/wombatTheDude/name");
            const sMsg = oBundle.getText("inputFieldDescriptionMsg", [sWombatTheDude]);
            // show message
            MessageToast.show(sMsg);
        }

    });

});