import { Container } from '@/shared/ui';
import { useTranslation } from '@/shared/hooks/useTranslation';
import { FiGithub, FiMail } from 'react-icons/fi';

export function FooterWidget() {
  const t = useTranslation();
  return (
    <footer
      className="
        border-t
        border-[var(--border)]
        bg-[var(--panel)]/35
        py-8
        backdrop-blur-sm
      "
    >
      <Container className="max-w-[1500px]">
        <div
          className="
            mx-auto
            flex
            max-w-[1280px]
            flex-col
            items-center
            justify-between
            gap-4
            text-center
            md:flex-row
            md:text-left
          "
        >
          <div>
            <p className="text-sm font-black text-[var(--text)]">
              {t.footer.name}
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {t.footer.role}
            </p>
          </div>

          <div className="flex items-center gap-4">
          </div>

          <p className="text-xs font-medium text-[var(--muted)]">
            {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}