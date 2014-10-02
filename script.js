/*
	jQuery Document ready
*/

/*
	for iOS devices, use below code:
	window.addEventListener('DOMContentLoaded', function()
	{
		$("body").queryLoader2();
	});
*/

$(document).ready(function ()
{
	/*
		We are adding jQuery page preload to body
		As Body tag contain all the html structure
		so we are targetting body
	*/
    $("body").queryLoader2(
	{
		/*
			barColor
			Background color of the bar (in hex).
		*/
        barColor: "#6e6d73",
		/*
			backgroundColor
			Background color of the loader (in hex). 
		*/
        backgroundColor: "#fff1b0",
		/*
			percentage
			Set to true to enable percentage visualising. Default is false.
		*/
        percentage: true,
		/*
			barHeight
			Height of the bar in pixels. Default: 1
		*/
        barHeight: 1,
		/*
			completeAnimation
			Set the animation type at the end.
      Options: "grow" or "fade". Default is "fade". 
		*/
        completeAnimation: "grow"
    });

    
});