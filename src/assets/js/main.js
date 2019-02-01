document.addEventListener("DOMContentLoaded", () => {
  const app = senna.dataAttributeHandler.getApp();

  app.on("endNavigate", event => {
    initNavbar();
    fixHeroHeight();
    trackPageViews(event);
  });

  initNavbar();
  fixHeroHeight();
});

// Keeps the primary navigation in close proximity to the user
// by fixing it when scrolling up and disappearing when scrolling down
let headroom;

function initNavbar() {
  const header = document.querySelector(".site-header");

  if (headroom) {
    headroom.destroy();
  }

  headroom = new Headroom(header, {
    offset: 0,
    tolerance: 10,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp",
      top: "top",
      notTop: "notTop",
      bottom: "bottom",
      notBottom: "notBottom"
    }
  });

  headroom.init();
}

// Since Google Analytics only tracks page loads, we need to send a page view
// event every time Senna navigates to another page
function trackPageViews(event) {
  if (ga) {
    ga("set", "page", event.path);
    ga("send", "pageview");
  }
}

// Converts hero image's height to pixels in order
// to fix a weird behavior with 100vh on mobile devices
function fixHeroHeight() {
  const postHeader = document.querySelector(".post-header");

  if (postHeader) {
    postHeader.style.height = `${document.documentElement.clientHeight}px`;
  }
}
