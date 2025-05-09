"use client"
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const GoogleTranslate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["googtrans"]);

  useEffect(() => {
    if (!cookies.googtrans) {
      // If "googtrans" cookie does not exist, set default
      document.cookie = "googtrans=/en/en; path=/;";
      setCookie("googtrans", "/en/en", { path: "/" });
    }
  }, [cookies, setCookie]);

  useEffect(() => {
    // Function to add Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    // Google Translate initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();

    // Observe body style changes
    const observer = new MutationObserver(() => {
      const bodyTop = document.body.style.top;

      if (bodyTop === "40px") {
        document.body.style.top = "0px"; // Force it back to 0px
      }

      // Hide loader when top stabilizes at 0px
      if (bodyTop === "0px") {
        setIsLoading(false);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }} className="hidden"></div>
    </div>
  );
};

export default GoogleTranslate;
