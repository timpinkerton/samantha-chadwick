
$(document).ready(function(){
  $("#makeMeScrollable").smoothDivScroll({
    
    mousewheelScrolling: "allDirections",
    mousewheelScrollingStep: 1, 
    
    manualContinuousScrolling: true,
   
    touchScrolling: true,
    
    hotSpotScrolling: false,
    
//    hotSpotScrollingStep: 5,
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



//$(document).ready(function(){
//  $("#makeMeScrollable").smoothTouchScroll({ 
//      continuousScrolling: false,
//  });
//});