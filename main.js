$(".testimonial-slider-container").slick({
  autoplay: true, // Do we want it to autoplay? true or false
  autoplaySpeed: 3000, // How long between each slide when auto-playing
  speed: 500, // How fast is the transition in milliseconds
  adaptiveHeight: false,
  arrows: false, // Do you want to show arrows to trigger each slide
  accessibility: true, // Enables keyboard tabbing and arrow key navigation
  dots: false, // Enables the dots below to show how many slides
  fade: false, // Changes the animate from slide to fade if true
  infinite: true, // When true, means that it will scroll in a circle
  pauseOnHover: true, // When true means the autoplay pauses when hovering
  pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
});
