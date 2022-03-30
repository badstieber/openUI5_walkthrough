sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("badstieber.walkthrough.Component", {

		metadata: {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
				"viewName": "badstieber.walkthrough.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			const oData = {
				wombatTheDude: {
					name: "Wombat"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);
			// set i18n model
			const i18nModel = new ResourceModel({
				bundleName: "badstieber.walkthrough.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		},
		
	});
});