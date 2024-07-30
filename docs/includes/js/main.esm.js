// main.js
import careers from "./careers.js";
// import IntroModule from "./intro";
// import HeaderModule from "./header";
// import FooterModule from "./footer";
const MainModule = (() => {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    
    lastScrollTop = scrollTop;
    handleWorksSectionScroll();
  }

  function handleWorksSectionScroll() {
    const worksSection = document.getElementById('works');
    const mainBody = document.querySelector(".main-page");
    
    if (worksSection && mainBody) {
      const worksSectionRect = worksSection.getBoundingClientRect();
      if (worksSectionRect.top <= 0) {
        mainBody.classList.add("main-dark");
      } else {
        mainBody.classList.remove("main-dark");
      }
    }
  }

  function duplicateMarquee() {
    const marquee = document.querySelector('.marquee');
    const marqueeWidth = marquee.offsetWidth;
    const windowWidth = window.innerWidth;

    const repeatCount = Math.ceil(windowWidth / marqueeWidth) + 1;
    const originalContent = marquee.innerHTML;

    for (let i = 0; i < repeatCount; i++) {
      marquee.innerHTML += originalContent;
    }
  }

  function initModules() {
    const modules = [careers];
    modules.forEach(module => {
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
    const modules = [careers];
    modules.forEach(module => {
      if (module && typeof module.handleResize === 'function') {
        try {
          module.handleResize();
        } catch (error) {
          console.error(`Error handling resize for ${module.name} module:`, error);
        }
      }
    });
    duplicateMarquee();
  }

  function init() {
    initModules();
    duplicateMarquee();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("resize", handleResize);
  }

  return { init };
})();

MainModule.init();
AOS.init();