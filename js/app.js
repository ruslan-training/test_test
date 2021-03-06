(() => {
  "use strict";
  !(function (e) {
    let t = document.querySelector(".dropdown__input");
    document.querySelectorAll(".dropdown__item").forEach((e, n) => {
      e.addEventListener("click", function (n) {
        t.value = e.textContent;
      });
    });
  })();
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
        320: { slidesPerView: 2, spaceBetween: 10 },
        580: { slidesPerView: 3, spaceBetween: 10 },
        767: { slidesPerView: 4, spaceBetween: 10 },
        900: { slidesPerView: 5, spaceBetween: 10 },
        900: { slidesPerView: 5, spaceBetween: 10 },
      },
    });
  let t = document.querySelectorAll(".radio-radio");
  for (let e of t)
    e.addEventListener("click", () => {
      e.classList.toggle("_active");
    });
  let n = !1;
  setTimeout(() => {
    if (n) {
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
