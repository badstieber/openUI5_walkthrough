sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";
    return Controller.extend("badstieber.walkthrough.controller.App", {
        /**
         * onInit is one of OpenUI5’s lifecycle methods that is invoked by the framework when the controller is created, similar to a constructor function of a control
         */
        onInit: function () {
            // set data model on view
            const oData = {
                wombatTheDude: {
                    name: "Wombat"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "badstieber.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },

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