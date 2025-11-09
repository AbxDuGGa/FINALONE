var swiperw = new Swiper(".mySwiper", {
    slidesPerView: 3.5,    
    spaceBetween: 20,
    slidesPerGroup: 1,        
    loop: false,               
    speed: 800,                
    centerInsufficientSlides: true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1.2, slidesPerGroup: 1 },
      768: { slidesPerView: 2.2, slidesPerGroup: 1 },
      1024: { slidesPerView: 3.5, slidesPerGroup: 1 },
    },
  });
  
const openBtn = document.getElementById('watchFilmBtn');
  const popupbt = document.getElementById('videoPopuptr');
  const closeBtnq = document.getElementById('closePopuptrBtn');
  const video = document.getElementById('popuptrVideo');

  // Open popup (and optionally autoplay)
  function openVideo() {
    popupbt.classList.add('show');
    popupbt.setAttribute('aria-hidden', 'false');

    // optional: autoplay if you want (unmuted autoplay is blocked on many browsers)
    // video.muted = true; // uncomment to start muted if you want autoplay to work reliably
    // video.play().catch(()=>{}); // play() may be blocked if not user-initiated
  }

  // Close popup and stop video
  function closeVideo() {
    popupbt.classList.remove('show');
    popupbt.setAttribute('aria-hidden', 'true');

    // pause and reset to start
    if (!video.paused) video.pause();
    try { video.currentTime = 0; } catch(e) { /* some browsers restrict currentTime on certain sources */ }
  }

  // Connect button events
  openBtn.addEventListener('click', openVideo);
  closeBtnq.addEventListener('click', closeVideo);

  // Close when clicking outside the content
  popupbt.addEventListener('click', (e) => {
    if (e.target === popupbt) closeVideo();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupbt.classList.contains('show')) closeVideo();
  });

  // Accessibility: stop video if user navigates away from page/tab
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && popupbt.classList.contains('show')) {
      if (!video.paused) video.pause();
    }
  });

const swiper = new Swiper(".mySwiperCARD", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {           // when window width is >= 0px
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {        // >= 640px
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {       // >= 1024px
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {       // >= 1300px
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Popup elements
const popup = document.getElementById("infoPopup");
const popupText = document.getElementById("popupText");
const closeBtn = document.querySelector(".close-btnq");

// When a slide (card) is clicked
document.querySelectorAll(".mySwiperCARD .swiper-slide").forEach(card => {
  card.addEventListener("click", () => {
    const info = card.getAttribute("data-info");
    popupText.innerHTML = info;
    popup.classList.remove("hidden");
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Close popup by clicking outside
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});

var tswiper = new Swiper(".mySwiperlt", {
  slidesPerView: 3,
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

