import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Menu from "../components/Menu";


const storedLanguage = localStorage.getItem("language") || "en";

// Define your translations here
const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Products:"Products",
      Developments: "Developments",
      Contact: "Contact",
      Menu: "Menu",
     
    },  
  },
  ar: {
    translation: {
      Home: "الرئيسية",
      About: "عنا",
      Products: "منتاجاتنا",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage, // Set stored language as the default
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
