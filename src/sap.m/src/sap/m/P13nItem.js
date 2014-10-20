/*!
 * ${copyright}
 */

// Provides control sap.m.P13nItem.
sap.ui.define(['jquery.sap.global', './library', 'sap/ui/core/Item'],
	function(jQuery, library, Item) {
	"use strict";


	
	/**
	 * Constructor for a new P13nItem.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * tbd (should enable panels of personalization to have a constistent view of the 'columns' of the table)
	 * @extends sap.ui.core.Item
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @name sap.m.P13nItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var P13nItem = Item.extend("sap.m.P13nItem", /** @lends sap.m.P13nItem.prototype */ { metadata : {
	
		library : "sap.m",
		properties : {
	
			/**
			 * tbd
			 */
			visible : {type : "boolean", group : "Misc", defaultValue : null}
		}
	}});
	
	///**
	// * This file defines behavior for the control,
	// */
	//sap.m.BaseItem.prototype.init = function(){
	//   // do something for initialization...
	//};
	

	return P13nItem;

}, /* bExport= */ true);