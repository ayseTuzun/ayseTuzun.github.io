import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./lang/en/translation";
import translationDE from "./lang/de/translation";
import translationTR from "./lang/tr/translation";

const fallbackLng = ["en"];
const availableLanguages = ["en", "de", "tr"];

const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    },
    tr: {
        translation: translationTR
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,

        detection: {
            checkWhitelist: true
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;