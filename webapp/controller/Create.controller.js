/*global location */
sap.ui.define([
	"com/oetker/demo/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"com/oetker/demo/model/formatter",
	"sap/m/MessageBox"
], function(BaseController, JSONModel, formatter, MessageBox) {
	"use strict";

	return BaseController.extend("com.oetker.demo.controller.Create", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		onInit: function() {
			this.getRouter().getRoute("create").attachPatternMatched(this._onObjectMatched, this);
			var oCountries = {
				countries: [
					{code: "DE", name: "Deutschland"},
					{code: "US", name: "United States of America"},
					{code: "PT", name: "Portugal"}
					]
			};
			var oCountryModel = new JSONModel(oCountries);
			this.setModel(oCountryModel,"countries");
			
			sap.ui.getCore().attachValidationError(function(oEvent) {
				var oControl = oEvent.getParameter("element");
				if(oControl && oControl.setValueState) {
					oControl.setValueState(sap.ui.core.ValueState.Error);
				}
			});
			sap.ui.getCore().attachValidationSuccess(function(oEvent) {
				var oControl = oEvent.getParameter("element");
				if(oControl && oControl.setValueState) {
					oControl.setValueState(sap.ui.core.ValueState.None);
				}
			});
		},
		
		onSave: function(oEvent) {
			var oNewPartner = this.getModel("newPartner").getData();
			if (!this._validate(oNewPartner)) {
				return;
			}
			var oModel = this.getOwnerComponent().getModel();
			oModel.create("/BusinessPartnerSet", oNewPartner, {
				success: function(oData, oResponse) {
					MessageBox.show("New Business Partner " + oData.BpId + " created",{
        				icon: sap.m.MessageBox.Icon.SUCCESS,
        				title: "Success"} );				
				},
				error: function(oError) {
					MessageBox.alert(oError.responseText);
				}
			});
		},
		
		_validate: function(oNewPartner) {
			var bValid = true;
			var aControls = [
				this.getView().byId("inputCompany"),
				this.getView().byId("cbCountry")
				];
				
			jQuery.each(aControls, function(i,element) {
				if (element.getValue()) {
					element.setValueState(sap.ui.core.ValueState.Error);
				}
			});

			jQuery.each(aControls, function(i,element) {
				if (element.getValueState && element.getValueSate() === sap.ui.core.valueState.Error) {
					bValid = false;
					return false;
				}
			});
			
			return bValid;
		},
		
		onCancel: function(oEvent) {
			this.onNavBack();	
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
				Country: "DE",
				EmailAddress: "",
				WebAddress: "",
				PhoneNumber: "",
				FaxNumber: "",
				AddressType: "02",
				AddressValStartDate: new Date(),
				AddressValEndDate: new Date((new Date()).setFullYear(2090))
			};
			var oNewBusinessPartnerModel = new JSONModel(oNewBusinessPartner);
			this.setModel(oNewBusinessPartnerModel, "newPartner");
		}


	});

});