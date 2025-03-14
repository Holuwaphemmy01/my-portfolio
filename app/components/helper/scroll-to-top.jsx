// "use client";

// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa6";

// const DEFAULT_BTN_CLS =
//   "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
// const SCROLL_THRESHOLD = 50;

// const ScrollToTop = () => {
//   const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > SCROLL_THRESHOLD) {
//         setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
//       } else {
//         setBtnCls(DEFAULT_BTN_CLS + " hidden");
//       }
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll, { passive: true });
//     };
//   }, []);

//   const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <button className={btnCls} onClick={onClickBtn}>
//       <FaArrowUp />
//     </button>
//   );
// };

// export default ScrollToTop;


"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden"); // Initialize as hidden

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
          setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
        } else {
          setBtnCls(DEFAULT_BTN_CLS + " hidden");
        }
      };

      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll, { passive: true });
      };
    }
  }, []);

  const onClickBtn = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;