
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
import commonEn from "./locales/en/common.json";
import navbarEn from "./locales/en/navbar.json";
import footerEn from "./locales/en/footer.json";
import indexEn from "./locales/en/index.json";
import faqEn from "./locales/en/faq.json";
import blogEn from "./locales/en/blog.json";

// Polish translations
import commonPl from "./locales/pl/common.json";
import navbarPl from "./locales/pl/navbar.json";
import footerPl from "./locales/pl/footer.json";
import indexPl from "./locales/pl/index.json";
import faqPl from "./locales/pl/faq.json";
import blogPl from "./locales/pl/blog.json";

// Initialize i18n instance before exporting
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: commonEn,
        navbar: navbarEn,
        footer: footerEn,
        index: indexEn,
        faq: faqEn,
        blog: blogEn,
      },
      pl: {
        common: commonPl,
        navbar: navbarPl,
        footer: footerPl,
        index: indexPl,
        faq: faqPl,
        blog: blogPl,
      }
    },
    fallbackLng: "en",
    defaultNS: "common",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "socialboost-language",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
