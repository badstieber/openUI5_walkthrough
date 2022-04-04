sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("badstieber.walkthrough.controller.InvoiceList", {

        formatter: formatter,
        
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR in Bar Diggi"
            });
            this.getView().setModel(oViewModel, "view");
        }

    });
});