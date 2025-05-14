
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
import xTwitterEn from "./locales/en/xtwitter.json";
import youtubeEn from "./locales/en/youtube.json";
import web3En from "./locales/en/web3.json";
import contactEn from "./locales/en/contact.json";

// Polish translations
import commonPl from "./locales/pl/common.json";
import navbarPl from "./locales/pl/navbar.json";
import footerPl from "./locales/pl/footer.json";
import indexPl from "./locales/pl/index.json";
import faqPl from "./locales/pl/faq.json";
import blogPl from "./locales/pl/blog.json";
import xTwitterPl from "./locales/pl/xtwitter.json";
import contactPl from "./locales/pl/contact.json";

// German translations
import commonDe from "./locales/de/common.json";
import navbarDe from "./locales/de/navbar.json";
import footerDe from "./locales/de/footer.json";
import indexDe from "./locales/de/index.json";
import faqDe from "./locales/de/faq.json";
import blogDe from "./locales/de/blog.json";
import xTwitterDe from "./locales/de/xtwitter.json";
import contactDe from "./locales/de/contact.json";

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
        xtwitter: xTwitterEn,
        youtube: youtubeEn,
        web3: web3En,
        contact: contactEn
      },
      pl: {
        common: commonPl,
        navbar: navbarPl,
        footer: footerPl,
        index: indexPl,
        faq: faqPl,
        blog: blogPl,
        xtwitter: xTwitterPl,
        contact: contactPl
      },
      de: {
        common: commonDe,
        navbar: navbarDe,
        footer: footerDe,
        index: indexDe,
        faq: faqDe,
        blog: blogDe,
        xtwitter: xTwitterDe,
        contact: contactDe
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
