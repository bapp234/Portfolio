import { useState } from 'react';
import { Container } from '@/shared/ui';
import { navItems } from '@/shared/config/navItems';
import { ThemeToggle } from '@/features/theme-toggle';
import { LanguageToggle } from '@/features/language-toggle';
import { useTranslation } from '@/shared/hooks/useTranslation';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

export function HeaderWidget() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();
  const activeSection = useActiveSection();

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function getNavLabel(href) {
    const key = href.replace('#', '');
    return t.nav[key] || '';
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--panel)]/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="
              inline-flex
              h-9
              min-w-9
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              px-3
              text-sm
              font-semibold
              text-[var(--text)]
              transition
              duration-200
              hover:bg-[var(--panel-soft)]
              md:hidden
            "
          >
            {isMenuOpen ? '×' : '☰'}
          </button>

          <nav
            className="hidden flex-1 items-center justify-center gap-3 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const current = item.href.replace('#', '');

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
        relative
        inline-flex
        w-fit
        px-4
        py-3
        text-base
        font-medium
        transition
        duration-300
        ease-out

        after:absolute
        after:bottom-1
        after:left-4
        after:h-[2px]
        after:rounded-full
        after:bg-[var(--accent)]
        after:transition-all
        after:duration-300

        ${activeSection === current
                      ? `
              text-[var(--text)]
              after:w-2/3
            `
                      : `
              text-[var(--muted)]
              after:w-0
              hover:text-[var(--text)]
              hover:after:w-2/3
            `
                    }
      `}
                >
                  {getNavLabel(item.href)}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="/Ngo_Hoang_Sang_CV.pdf"
              download
              className="
              group
              relative
              hidden
              items-center
              gap-2
              overflow-hidden
              rounded-full
              bg-[var(--accent)]
              px-5
              py-2
              text-sm
              font-semibold
              text-[var(--button-text)]
              shadow-sm
              transition
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:bg-[var(--accent-hover)]
              hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]
              active:translate-y-0
              sm:inline-flex
            "
            >
              <span
                className="
                absolute
                inset-0
                -translate-x-full
                bg-white/15
                transition
                duration-500
                ease-out
                group-hover:translate-x-full
              "
              />

              <span
                className="
                relative
                z-10
                transition
                duration-300
                ease-out
                group-hover:translate-x-0.5
    "
              >
                {t.common.downloadCV}
              </span>
            </a>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="bg-[var(--panel)]/95 shadow-[0_12px_24px_rgba(0,0,0,0.08)] md:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const current = item.href.replace('#', '');

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`
        relative
        inline-flex
        items-center
        px-4
        py-2
        text-base
        font-medium
        transition
        duration-300
        ease-out
        after:absolute
        after:bottom-0
        after:left-1/2
        after:h-[2px]
        after:-translate-x-1/2
        after:rounded-full
        after:bg-[var(--accent)]
        after:transition-all
        after:duration-300
        hover:scale-105
        lg:px-5

        ${activeSection === current
                        ? `
              text-[var(--text)]
              after:w-2/3
            `
                        : `
              text-[var(--muted)]
              after:w-0
              hover:text-[var(--text)]
              hover:after:w-2/3
            `
                      }
      `}
                  >
                    {getNavLabel(item.href)}
                  </a>
                );
              })}
            </nav>

            <a
              href="/cv.pdf"
              download
              onClick={closeMenu}
              className="
              group
              relative
              mt-3
              flex
              w-full
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-xl
              bg-[var(--accent)]
              px-4
              py-3
              text-base
              font-semibold
              text-[var(--button-text)]
              shadow-sm
              transition
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:bg-[var(--accent-hover)]
              hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]
              active:translate-y-0
            "
            >
              <span
                className="
                absolute
                inset-0
                -translate-x-full
                bg-white/15
                transition
                duration-500
                ease-out
                group-hover:translate-x-full
              "
              />

              <span
                className="
                relative
                z-10
                transition
                duration-300
                ease-out
                group-hover:translate-x-0.5
              "
              >
                {t.common.downloadCV}
              </span>
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}