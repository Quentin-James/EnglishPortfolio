import React, { createContext, useState, useContext } from 'react';
import * as contentFr from '../content_option';
import * as contentEn from '../content_option_en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');
    const content = language === 'fr' ? contentFr : contentEn;

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'fr' ? 'en' : 'fr');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}; 