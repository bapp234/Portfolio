import { useLanguage } from '@/app/providers/LanguageProvider';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      role="switch"
      aria-checked={language === 'en'}
      className="
        relative
        h-9
        w-[92px]
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--panel)]
        px-1
        text-xs
        font-bold
        text-[var(--text)]
        transition
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:border-[var(--accent)]
        hover:bg-[var(--panel-soft)]
        hover:shadow-sm
      "
    >
      <span className="absolute inset-0 flex items-center justify-between px-4">
        <span
          className={
            language === 'vi'
              ? 'text-[var(--button-text)]'
              : 'text-[var(--muted)]'
          }
        >
          VI
        </span>

        <span
          className={
            language === 'en'
              ? 'text-[var(--button-text)]'
              : 'text-[var(--muted)]'
          }
        >
          EN
        </span>
      </span>

      <span
        className={`
          absolute
          left-1
          top-1
          flex
          h-7
          w-[42px]
          items-center
          justify-center
          rounded-full
          bg-[var(--accent)]
          text-[var(--button-text)]
          shadow-sm
          transition
          duration-300
          ease-out
          ${language === 'en' ? 'translate-x-[42px]' : 'translate-x-0'}
        `}
      >
        {language === 'vi' ? 'VI' : 'EN'}
      </span>
    </button>
  );
}