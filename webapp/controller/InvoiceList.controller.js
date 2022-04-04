sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("badstieber.walkthrough.controller.InvoiceList", {

        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR in Bar Digger"
            });
            this.getView().setModel(oViewModel, "view");
        }

    });
});