
(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){

           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
               console.log("H = ", H);
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));

$(document).ready(function() {


  $("#porcelenaDescription").inViewport(function(px){
      if(px) {
          $("#porcelenaDescription").addClass("fadeInUp") ;
      }
  });

  $("#porcelenaTimelineContent").inViewport(function(px){
      if(px) {
          $("#porcelenaTimelineContent").addClass("bounce-in") ;
      }
  });

  $("#porcelenaProjectContent").inViewport(function(px){
      if(px) {
          $("#porcelenaProjectContent").addClass("fadeInLeft") ;
      }
  });


  $("#paintingDescription").inViewport(function(px){
    if(px) {
        $("#paintingDescription").addClass("fadeInUp") ;
    }
  });

  $("#paintingTimelineContent").inViewport(function(px){
    if(px) {
        $("#paintingTimelineContent").addClass("bounce-in") ;
    }
  });

  $("#paintingProjectContent").inViewport(function(px){
    if(px) {
        $("#paintingProjectContent").addClass("fadeInRight") ;
    }
  });


  $("#biographyDescription").inViewport(function(px){
    if(px) {
        $("#biographyDescription").addClass("fadeInUp") ;
    }
  });

  $("#biographyTimelineContent").inViewport(function(px){
    if(px) {
        $("#biographyTimelineContent").addClass("bounce-in") ;
    }
  });

  $("#biographyProjectContent").inViewport(function(px){
    if(px) {
        $("#biographyProjectContent").addClass("fadeInLeft") ;
    }
  });
  
});