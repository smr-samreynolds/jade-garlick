// Sticky navbar on scroll

const isMobile = window.innerWidth <= 766; // This code determines whether the user is on a mobile device. You can use JavaScript to check the screen width or other device-specific properties. Adjust the threshold as needed

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (!isMobile) {
    //this means the below code (scroll down and the nav disappears scroll up and it reappears) will only work if the screen is not a mobile device (i.e. only works on desktops/laptops). If a mobile is detects (anything with a screen width less than or equal to 767) the navbar will be fixed at the top of the screen.
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  }
});

// HAMBURGER MENU
$(".hamburger-button").click(function () {
  $(".mobile-menu").fadeToggle(100);
  $(this).toggleClass("active");
});

// Header image gallery slider
$(".image-slider-container").slick({
  autoplay: true, // Do we want it to autoplay? true or false
  autoplaySpeed: 2000, // How long between each slide when auto-playing
  speed: 2000, // How fast is the transition in milliseconds
  arrows: false, // Do you want to show arrows to trigger each slide
  accessibility: true, // Enables keyboard tabbing and arrow key navigation
  dots: false, // Enables the dots below to show how many slides
  fade: true, // Changes the animate from slide to fade if true
  infinite: true, // When true, means that it will scroll in a circle
  pauseOnHover: false, // When true means the autoplay pauses when hovering
  pauseOnDotsHover: false, // Pauses the autoplay when hovering over the dots
});

// Testimonial Slider
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

// Accordian Services Section
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
