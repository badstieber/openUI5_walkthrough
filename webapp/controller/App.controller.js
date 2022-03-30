sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("badstieber.walkthrough.controller.App", {
        onShowHello: function () {
            MessageToast.show("Hey yoh Diggi!! Was geht ab?!");
        }
    });
});