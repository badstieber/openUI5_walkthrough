sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("badstieber.walkthrough.controller.HelloPanel", {

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
        },

        /**
         * handles fragment
         */
        onOpenDialog: function () {
            // create dialog lazily
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "badstieber.walkthrough.view.HelloDialog"
                });
            }
            this.pDialog.then(function(oDialog) {
                oDialog.open();
            });
        }


    });

});