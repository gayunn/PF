// main.js
import careers from "./careers.js";

const MainModule = (() => {
  let lastScrollTop = 0;
  let header, headerHeight, worksSection, mainBody, marquee;

  function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Header visibility
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    lastScrollTop = scrollTop;

    // Works section background change
    if (worksSection && mainBody) {
      const worksSectionRect = worksSection.getBoundingClientRect();
      mainBody.classList.toggle("main-dark", worksSectionRect.top <= 0);
    }
  }
  function initModules() {
    [careers].forEach(module => {
      if (module && typeof module.init === 'function') {
        try {
          module.init();
        } catch (error) {
          console.error(`Error initializing ${module.name} module:`, error);
        }
      }
    });
  }

  function handleResize() {
    [careers].forEach(module => {
      if (module && typeof module.handleResize === 'function') {
        try {
          module.handleResize();
        } catch (error) {
          console.error(`Error handling resize for ${module.name} module:`, error);
        }
      }
    });
  }

  function init() {
    header = document.querySelector('.header');
    headerHeight = header ? header.offsetHeight : 0;
    worksSection = document.getElementById('works');
    mainBody = document.querySelector(".main-page");

    initModules();

    window.addEventListener('scroll', debounce(handleScroll));
    window.addEventListener("resize", debounce(handleResize));

    if (typeof AOS !== 'undefined') {
      AOS.init();
    } else {
      console.warn('AOS library not found. Skipping initialization.');
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', MainModule.init);