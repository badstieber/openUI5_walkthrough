sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";
    return Controller.extend("badstieber.walkthrough.controller.App", {

        onInit: function () {
            // set data model on view
            const oData = {
                wombatTheDude: {
                    name: "Wombat"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: () => {
            MessageToast.show("Hey jo Diggi!! Was geht ab?!");
        }

    });

});