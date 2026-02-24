import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ENJson from "./locale/en.json"
import FRJson from "./locale/fr.json"

// ecosystem for translations
// https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och

i18n.use(initReactI18next).init({
    lng: "FR",
    fallbackLng: "FR",
    interpolation: {
        escapeValue: false // using React instead
    },
    resources: { // object w/ translations
        EN: {...ENJson},
        FR: {...FRJson}
    }
})

export default i18n