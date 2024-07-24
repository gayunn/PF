// main.js
import careers from "./careers.js";
// import IntroModule from "./intro";
// import HeaderModule from "./header";
// import FooterModule from "./footer";

const MainModule = (() => {

  const init = () => {
    // Initialize each module
    try {
      careers.init();
      // IntroModule.init();
      // HeaderModule.init();
      // FooterModule.init();
    } catch (error) {
      console.error("Error initializing modules:", error);
    }

    // Global event listeners
    window.addEventListener("resize", () => {
      // Call resize handler of each module if needed
      try {
        if (careers && typeof careers.handleResize === 'function') {
          careers.handleResize();
        }
        // if (IntroModule && typeof IntroModule.handleResize === 'function') {
        //   IntroModule.handleResize();
        // }
        // if (HeaderModule && typeof HeaderModule.handleResize === 'function') {
        //   HeaderModule.handleResize();
        // }
        // if (FooterModule && typeof FooterModule.handleResize === 'function') {
        //   FooterModule.handleResize();
        // }
      } catch (error) {
        console.error("Error handling resize event:", error);
      }
    });
  };

  return { init };
})();

// Main module execution
MainModule.init();
