
$(document).ready(function(){
  $('#makeMeScrollable').smoothDivScroll({
    mousewheelScrolling: "allDirections",
    mousewheelScrollingStep: 3,
    manualContinuousScrolling: true,
    touchScrolling: true,
//    autoScrollingMode: "onStart"
  });
});

$(document).ready(function(e){
  $('.nav-toggle').click(function(){
    $(this).parent().toggleClass('active');
  });
  $('.main-nav p').click(function(){
    $(this).parent().toggleClass('active');
  });
});



//$(document).ready(function() {
//		$("#makeMeScrollable").smoothTouchScroll({ 
//			continuousScrolling: true
//		});
//	});