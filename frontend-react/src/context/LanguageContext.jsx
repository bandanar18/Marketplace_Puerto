import { createContext, useState, useContext } from 'react';

const translations = {
  es: {
    explore: 'Explorar',
    messages: 'Mensajes',
    notifications: 'Notificaciones',
    profile: 'Mi Perfil',
    search: 'Buscar servicios...',
    results_for: 'Resultados para',
    found_services: 'servicios encontrados en esta zona',
    request_quote: 'Solicitar Cotización',
    consult_provider: 'Consultar con proveedor',
    no_charge_yet: 'No se te cobrará nada aún',
    loading: 'Cargando...',
  },
  en: {
    explore: 'Explore',
    messages: 'Messages',
    notifications: 'Notifications',
    profile: 'My Profile',
    search: 'Search services...',
    results_for: 'Results for',
    found_services: 'services found in this area',
    request_quote: 'Request Quote',
    consult_provider: 'Consult with provider',
    no_charge_yet: 'You won\'t be charged yet',
    loading: 'Loading...',
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'es');

  const t = (key) => {
    return translations[lang][key] || key;
  };

  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => useContext(LanguageContext);
