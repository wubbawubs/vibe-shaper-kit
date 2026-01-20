import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, defaultLanguage, type Language } from './config';

// Extract language from URL pathname
function getLanguageFromPath(pathname: string): Language {
  const pathParts = pathname.split('/').filter(Boolean);
  if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0] as Language)) {
    return pathParts[0] as Language;
  }
  return defaultLanguage;
}

export function useLanguageFromUrl() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentLanguage = getLanguageFromPath(location.pathname);

  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

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

  const localizedPath = (path: string) => getLocalizedPath(path, currentLanguage);

  return { currentLanguage, changeLanguage, localizedPath };
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
