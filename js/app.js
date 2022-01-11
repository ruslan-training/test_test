(() => {
  "use strict";
  let e = document.querySelectorAll(".dropdown");
  for (let t of e)
    t.addEventListener("click", () => {
      t.classList.toggle("_active");
    });
  new Swiper(".benefits__slider", {
    direction: "horizontal",
    loop: !0,
    pagination: { el: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 800,
    autoplay: { delay: 2e3 },
  }),
    new Swiper(".partners__slider", {
      direction: "horizontal",
      loop: !0,
      pagination: { el: ".swiper-pagination" },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 800,
      autoplay: { delay: 3200 },
      slidesPerView: 3,
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 20 },
        580: { slidesPerView: 3, spaceBetween: 30 },
      },
    });
  let t = !1;
  setTimeout(() => {
    if (t) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
