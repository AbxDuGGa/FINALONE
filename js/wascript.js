var tswiper = new Swiper(".msSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: false, // keep false so it restarts manually
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// When it reaches the end, go back to start
tswiper.on("reachEnd", function () {
  setTimeout(() => {
    tswiper.slideTo(0, 1000); // smooth scroll back to first slide
  }, 2500); // wait same as autoplay delay before resetting
});

var acc = document.querySelectorAll(".accordion");
var img = document.getElementById("displayImage");

acc.forEach(btn => {
  btn.addEventListener("click", function () {

    // Change image
    let newImg = this.getAttribute("data-img");
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = newImg;
      img.style.opacity = "1";
    }, 200);

    // Toggle accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 18px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "10px 18px";
    }

  });
});

const particleField = document.getElementById('particleField');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
            particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particleField.appendChild(particle);
        }