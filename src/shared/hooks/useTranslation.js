import { useLanguage } from '@/app/providers/LanguageProvider';
import { translations } from '@/shared/config/translations';

export function useTranslation() {
  const { language } = useLanguage();

  if (language === 'en' || language === 'vi') {
    return translations[language];
  }

  return translations.vi;
}