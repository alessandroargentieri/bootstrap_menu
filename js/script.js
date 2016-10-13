 $(function(){ 
     var navMain = $("#collapsable-nav");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
 
 $("#collapsable-nav a").on("click", function(){
   $("#collapsable-nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});