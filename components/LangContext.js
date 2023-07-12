import React, { useContext, useState, useEffect } from 'react';
import { en, ja } from '../localizations'
import * as Localization from 'expo-localization';
import { I18n } from "i18n-js";

const LangContext = React.createContext();
const LangUpdateContext = React.createContext();
const i18nContext = React.createContext();

export function useLang(){
    return useContext(LangContext);
}

export function useLangUpdate(){
    return useContext(LangUpdateContext);
}

export function useI18n(){
    return useContext(i18nContext);
}

export function LangProvider({ children }){
    //set to default browser/os language
    const [locale, setLocale] = useState(Localization.locale);

    //check for previous cached selection and overwrite if necessary
    async function isLocaleSet(){
        try{
            let locale = await localStorage.getItem('@locale');
            setLocale(locale);
        } catch (error){
            console.log(error);
        }
    }    
    useEffect(() => {  
        isLocaleSet();
    });

    const i18n = new I18n();
    i18n.enableFallback = true;
    i18n.translations = { en, ja };
    i18n.locale = locale;

    function toggleLang(newLang){
        setLocale(newLang);
    }

    return(
        <LangContext.Provider value={locale}>
            <LangUpdateContext.Provider value={toggleLang}>
                <i18nContext.Provider value={i18n}>
                    {children}
                </i18nContext.Provider>
            </LangUpdateContext.Provider>
        </LangContext.Provider>
    )

}