/*global location */
sap.ui.define([
	"com/oetker/demo/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"com/oetker/demo/model/formatter"
], function(BaseController, JSONModel, formatter) {
	"use strict";

	return BaseController.extend("com.oetker.demo.controller.Create", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		onInit: function() {
			this.getRouter().getRoute("create").attachPatternMatched(this._onObjectMatched, this);
		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/**
		 * Event handler when the share button has been clicked
		 * @param {sap.ui.base.Event} oEvent the butten press event
		 * @public
		 */

		/* =========================================================== */
		/* begin: internal methods                                     */
		/* =========================================================== */

		/**
		 * Binds the view to the object path and expands the aggregated line items.
		 * @function
		 * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
		 * @private
		 */
		_onObjectMatched: function(oEvent) {
			var oNewBusinessPartner = {
				CompanyName: "",
				BpRole: "02",
				LegalForm: "GmbH",
				CurrencyCode: "EUR",
				Street: "",
				Building: "",
				City: "",
				PostalCode: "",
				Country: "",
				EmailAddress: "",
				WebAddress: "",
				PhoneNumber: "",
				FaxNumber: "",
				AddressType: "02",
				AddressValStartDate: new Date(),
				AddressValeEndDate: new Date((new Date()).setFullYear(2090))
			};
			var oNewBusinessPartnerModel = new JSONModel(oNewBusinessPartner);
			this.setModel(oNewBusinessPartnerModel, "newPartner");
		}


	});

});