(function ($, Drupal, drupalSettings) {

	'use strict';

	Drupal.behaviors.tsgp = {
	    
		attach: function( context , settings) {
		        var viewName = 'flag_bookmark';

		        // Your views should be Ajax enabled
		        if( Drupal.views) {
		        	var instances = Drupal.views.instances;
		        	var myViews;
	
		        	// then simply need to iterate through the various
		        	// views instances name to find the view
		        	$.each( instances , function getInstance( index, element){
		        	    if(element.settings.view_name == viewName ){
		        	        myViews = '.js-view-dom-id-' + element.settings.view_dom_id;
		        	    }
		        	});
	
		        	 $(myViews).trigger('RefreshView');
		        }


		    }
	}

})(jQuery, Drupal);