import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ru: {
        translation: {
            unread_messages_one: 'У вас {{count}} непрочитанное сообщение',
            unread_messages_few: 'У вас {{count}} непрочитанных сообщения',
            unread_messages_many: 'У вас {{count}} непрочитанных сообщений',
            unread_messages_other: 'У вас {{count}} непрочитанных сообщений'
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false
    }    
})