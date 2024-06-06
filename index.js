window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
      document.getElementById("header").style.top = "0";
  } else {
      document.getElementById("header").style.top = "-15%";
  }
}
let OpenNav = function(icon){
    let Nav = document.querySelector("nav");
    if(Nav.style.left == "0%"){
      Nav.style.left = "-100%"

      icon.classList.add("fa-bars")
      icon.classList.remove("fa-times")
    } else{
      Nav.style.left = "0%"
      icon.classList.add("fa-times")
      icon.classList.remove("fa-bars")
    }
  }
  var swiper = new Swiper(".slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    pagination: {
        el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".small_slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
  });
  