import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../model/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        group
        inline-flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--panel)]
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
      {isDark ? (
        <FiSun
          className="
            text-base
            transition
            duration-300
            ease-out
            group-hover:rotate-12
            group-hover:scale-110
          "
        />
      ) : (
        <FiMoon
          className="
            text-base
            transition
            duration-300
            ease-out
            group-hover:-rotate-12
            group-hover:scale-110
          "
        />
      )}
    </button>
  );
}