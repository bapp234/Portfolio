import { Container } from '@/shared/ui';
import { useTranslation } from '@/shared/hooks/useTranslation';
import {
  FiBox,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiServer,
  FiAirplay,
} from 'react-icons/fi';
import { SiHyperskill } from "react-icons/si";
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';

const iconMap = {
  Backend: <FiServer size={18} />,
  Database: <FiDatabase size={18} />,
  Frontend: <FiAirplay size={18} />,
  Architecture: <FiCode size={18} />,
  Workflow: <FiGitBranch size={18} />,
  'Soft Skills': <SiHyperskill size={18} />,
};

export function SkillsWidget() {
  const t = useTranslation();

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container className="max-w-[1500px]">
        <div className="mx-auto max-w-[1280px]">

          {/* Eyebrow + Headline + Subline */}
          <AnimateOnScroll>
            <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--panel)]/60 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-[var(--muted)] shadow-sm">
              <FiBox size={16} />
              {t.skills.eyebrow}
            </div>

            <h2 className="mx-auto mb-3 max-w-[760px] text-center text-3xl font-black leading-tight tracking-[-0.02em] text-[var(--text)] md:text-4xl">
              {t.skills.heading}
            </h2>

            <p className="mx-auto mb-10 max-w-[720px] text-center text-base leading-relaxed text-[var(--muted)]">
              {t.skills.subline}
            </p>
          </AnimateOnScroll>

          {/* Skills grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.skills.groups.map((group, idx) => (
              <AnimateOnScroll
                key={group.title}
                delay={0.1 + (idx % 3) * 0.1}
                className="h-full"
              >
                <SkillCard group={group} icon={iconMap[group.label]} />
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

function SkillCard({ group, icon }) {
  return (
    <article
      className="
        h-full group relative overflow-hidden rounded-[20px] border
        border-[var(--border)] bg-[var(--page-bg)] p-6 shadow-sm
        transition duration-300 ease-out hover:-translate-y-1
        hover:border-[var(--accent)] hover:bg-[var(--panel)]
        hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:p-7
      "
    >
      <IconBox className="mb-4">{icon}</IconBox>

      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)] transition duration-300 ease-out group-hover:text-[var(--accent)]">
        {group.label}
      </p>

      <h3 className="mb-3 text-base font-black text-[var(--text)] transition duration-300 ease-out group-hover:translate-x-1 md:text-lg">
        {group.title}
      </h3>

      <p className="text-[15px] leading-8 text-[var(--muted)]">
        {group.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[var(--border)] bg-[var(--panel)]/60 px-3 py-1 text-xs font-semibold text-[var(--muted)] transition duration-300 ease-out group-hover:border-[var(--accent)]/60 group-hover:text-[var(--text)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function IconBox({ children, className = '' }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel)] text-[var(--accent)] shadow-sm transition duration-300 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-[var(--button-text)] ${className}`}
    >
      {children}
    </div>
  );
}