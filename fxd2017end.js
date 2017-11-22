jQuery(document).ready(function(){
   $('body').on('touchmove', function(e){
     var rXP = (e.changedTouches[0].pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.changedTouches[0].pageY - this.offsetTop-$(this).height()/2);
     $('div').css('text-shadow', +rYP/50+'px '+rXP/400+'px rgba(227,6,19,1), '/*red*/
                                +rYP/40+'px '+rXP/300+'px rgba(130,18,18,.7), '/*dark red*/
                                +rXP/350+'px '+rYP/60+'px rgba(0,146,69,.9)');/*green*/
   });
});
