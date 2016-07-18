
jQuery(function () {
	"use strict";

    /*global jQuery $*/
	//Slider
	$(document).ready(function(){

		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.countBar').animate({
					width:jQuery(this).attr('dataPercent')
				},3000);
				var percent = jQuery(this).attr('dataPercent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});
	});

}());
