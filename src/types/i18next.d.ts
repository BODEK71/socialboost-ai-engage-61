
declare module 'react-i18next' {
  import { ReactNode } from 'react';
  import { i18n as I18nInterface } from 'i18next';

  export interface UseTranslationResponse {
    t: (key: string, options?: any) => string;
    i18n: I18nInterface;
    ready: boolean;
  }

  export function useTranslation(ns?: string | string[], options?: any): UseTranslationResponse;
  export const initReactI18next: any;
  export interface I18nextProviderProps {
    i18n: I18nInterface;
    children: ReactNode;
  }
  export function I18nextProvider(props: I18nextProviderProps): JSX.Element;
  export type ReactI18NextChildren = ReactNode;
}

declare module 'i18next' {
  interface DetectionOptions {
    order?: string[];
    lookupLocalStorage?: string;
    caches?: string[];
  }

  interface InitOptions {
    resources?: any;
    lng?: string;
    fallbackLng?: string;
    defaultNS?: string;
    detection?: DetectionOptions;
    interpolation?: {
      escapeValue?: boolean;
    };
  }

  interface i18n {
    t: (key: string, options?: any) => any;
    changeLanguage: (lng: string) => Promise<any>;
    language: string;
    use: (module: any) => i18n;
    init: (options: InitOptions) => Promise<any>;
  }

  const i18n: i18n;
  export default i18n;
}

declare module 'i18next-browser-languagedetector' {
  import { i18n } from 'i18next';
  
  class LanguageDetector {
    constructor(services?: any, options?: any);
    init(services?: any, options?: any): void;
    detect(): string;
    cacheUserLanguage(lng: string): void;
  }
  
  export default LanguageDetector;
}
