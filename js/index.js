$("#vignetting").click(() => { 
  var demoEl = $("#vignette-demo");
  if (demoEl.hasClass("vignette"))
  {
     demoEl.removeClass('vignette') 
  } else {
    demoEl.addClass('vignette') 
  }
});

$("#image").click(() => { 
  var demoEl = $("#image-element");
  if (demoEl.hasClass("visible"))
  {
    demoEl.removeClass("visible") 
  } else {
    demoEl.addClass("visible")     
  }
});