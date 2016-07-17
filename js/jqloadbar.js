$(document).ready(function() {
	/**
	 *
	 * Example usage of loadbar with button
	 *
	 * set variable of buttons & bars
	 *
	 */
	var jqLoadbar 			= '.jq-loadbar .loadbar';

	var zeroPercent 		= 'button.zeroPercent';
	var twentyPercent 		= 'button.twentyPercent';
	var fourtyPercent 		= 'button.fourtyPercent';
	var sixtyPercent 		= 'button.sixtyPercent';
	var eightyPercent		= 'button.eightyPercent';
	var oneHundredPercent 	= 'button.oneHundredPercent';

	/**
	 *
	 * Handle onClick events
	 *
	 */
	$(zeroPercent).click(function(e) {
		e.preventDefault();
		$(jqLoadbar).fadeIn();
		$(jqLoadbar).css('width', '0%');
		$(jqLoadbar).css('transition', 'all 1s');
	});
	$(twentyPercent).click(function(e) {
		e.preventDefault();
		$(jqLoadbar).fadeIn();
		$(jqLoadbar).css('width', '20%');
		$(jqLoadbar).css('transition', 'all 1s');
	});
	$(fourtyPercent).click(function(e) {
		e.preventDefault();
		$(jqLoadbar).fadeIn();
		$(jqLoadbar).css('width', '40%');
		$(jqLoadbar).css('transition', 'all 1s');
	});
	$(sixtyPercent).click(function(e) {
		e.preventDefault();
		$(jqLoadbar).fadeIn();
		$(jqLoadbar).css('width', '60%');
		$(jqLoadbar).css('transition', 'all 1s');
	});
	$(eightyPercent).click(function(e) {
		e.preventDefault();
		$(jqLoadbar).fadeIn();
		$(jqLoadbar).css('width', '80%');
		$(jqLoadbar).css('transition', 'all 1s');
	});
	$(oneHundredPercent).click(function(e) {
		e.preventDefault();
		$(jqLoadbar).fadeIn();
		$(jqLoadbar).css('width', '100%');
		$(jqLoadbar).css('transition', 'all 1s');
	});

});