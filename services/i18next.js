// i18n.js
import i18n from 'i18n-js';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import pu from '../locales/pu.json';

i18n.fallbacks = true;
i18n.translations = { en, hi, pu }; 

export default i18n;