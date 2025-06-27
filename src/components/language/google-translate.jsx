"use client"
import React, { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userCountry = detectUserCountry();
    const defaultLang = userCountry === 'DE' ? '/en/de' : '/en/en';
    const storedLang = localStorage.getItem("googtrans") || defaultLang;
    document.cookie = `googtrans=${storedLang}; path=/; domain=.fra-transfer.de;`;
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
    const observer = new MutationObserver(() => {
      const bodyTop = document.body.style.top;
      if (bodyTop === "40px") {
        document.body.style.top = "0px";
      }
      if (bodyTop === "0px") {
        setIsLoading(false);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  const detectUserCountry = () => {
    const cachedCountry = localStorage.getItem('userCountry');
    if (cachedCountry) return cachedCountry;
    return 'EN';
  };

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ display: "none" }}
        className="hidden"
      ></div>
    </div>
  );
};

export default GoogleTranslate;

