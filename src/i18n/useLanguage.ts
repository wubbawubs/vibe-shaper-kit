import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, defaultLanguage, type Language } from './config';

export function useLanguageFromUrl() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang as Language)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, [lang, i18n]);

  const changeLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    // Check if current path has a language prefix
    if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0] as Language)) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }
    
    const newPath = '/' + pathParts.join('/');
    navigate(newPath);
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = (lang as Language) || defaultLanguage;

  return { currentLanguage, changeLanguage };
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, '');
  const pathParts = cleanPath.split('/').filter(Boolean);
  
  if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0] as Language)) {
    pathParts.shift();
  }
  
  const basePath = pathParts.join('/');
  return `/${lang}${basePath ? '/' + basePath : ''}`;
}
