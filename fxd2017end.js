jQuery(document).ready(function(){
	// $('body').on('touchmove', function(e){
	// 	var rXP = (e.changedTouches[0].pageX - this.offsetLeft-$(this).width()/2);
	// 	var rYP = (e.changedTouches[0].pageY - this.offsetTop-$(this).height()/2);
	// 	$('div').css('text-shadow', +rYP/50+'px '+rXP/400+'px rgba(227,6,19,1), '/*red*/
	// 	                        +rYP/40+'px '+rXP/300+'px rgba(130,18,18,.7), '/*dark red*/
	// 	                        +rXP/350+'px '+rYP/60+'px rgba(0,146,69,.9)');/*green*/
	// });
	window.addEventListener('deviceorientation', function (e) {
		var x = event.beta;  // In degree in the range [-180,180]
		var y = event.gamma; // In degree in the range [-90,90]

		console.log("beta : " + x);
		console.log("gamma : " + y);
		var rXP = x;
		var rYP = y*2;
		$('div').css('text-shadow', +rYP+'px '+rXP+'px rgba(227,6,19,1), '/*red*/
									+rYP+'px '+rXP+'px rgba(130,18,18,.7), '/*dark red*/
									+rXP+'px '+rYP+'px rgba(0,146,69,.9)');/*green*/
	});
});
