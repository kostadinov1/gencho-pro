import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "bg",
        resources: {

        bg: {
            translation: {
                language: "Език",
                home: "Начало",
                projects: "Проекти",
                services: "Услуги",
                contacts: "Контакти",

        },},
        en: {
            translation: {
            language: "Language",
            home: "Home",
            projects: "Projects",
            services: "Services",
            contacts: "Contacts",

            }
        },
        ru: {
            translation: {
                language: "Язык",
                home: "Дом",
                projects: "Проекты",
                services: "Услуги",
                contacts: "Контакты",
            }
        }
        }
  })