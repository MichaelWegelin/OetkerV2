jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("com.oetker.demo.test.integration.pages.Common");
jQuery.sap.require("com.oetker.demo.test.integration.pages.App");
jQuery.sap.require("com.oetker.demo.test.integration.pages.Browser");
jQuery.sap.require("com.oetker.demo.test.integration.pages.Master");
jQuery.sap.require("com.oetker.demo.test.integration.pages.Detail");
jQuery.sap.require("com.oetker.demo.test.integration.pages.NotFound");

sap.ui.test.Opa5.extendConfig({
	arrangements: new com.oetker.demo.test.integration.pages.Common(),
	viewNamespace: "com.oetker.demo.view."
});

jQuery.sap.require("com.oetker.demo.test.integration.NavigationJourneyPhone");
jQuery.sap.require("com.oetker.demo.test.integration.NotFoundJourneyPhone");
jQuery.sap.require("com.oetker.demo.test.integration.BusyJourneyPhone");