
// brand logo slideshow
let currentSlide = 0;

function showSlide(index) {
     const slides = document.querySelectorAll('.slide');
     const totalSlides = slides.length;
     const slidesToShow = 3;

     if (index >= totalSlides - slidesToShow + 1) {
          currentSlide = 0;
     } else if (index < 0) {
          currentSlide = totalSlides - slidesToShow;
     } else {
          currentSlide = index;
     }

     const offset = -currentSlide * (100 / slidesToShow);
     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
     showSlide(currentSlide + 1);
}

function prevSlide() {
     showSlide(currentSlide - 1);
}
setInterval(nextSlide, 3000);
showSlide(currentSlide);

// hiệu ứng loading
document.addEventListener("DOMContentLoaded", function () {
     setTimeout(function () {
          document.getElementById("loading").style.display = "none";
          document.getElementById("content").style.display = "block";
     }, 500);
});

// 
document.addEventListener("DOMContentLoaded", () => {
     let validatelogin = document.getElementById("logoutclass");
     let loginstatus = localStorage.getItem("login");
     if (loginstatus === "true") {
          validatelogin.style.display = "block";
     } else {
          validatelogin.style.display = "none";
     }
})