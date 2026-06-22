import { Container } from '@/shared/ui';
import { useTranslation } from '@/shared/hooks/useTranslation';
import {
  FiBriefcase,
  FiHeart,
  FiTarget,
  FiBookOpen,
  FiUser,
  FiCalendar,
  FiArrowRight,
} from 'react-icons/fi';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';

export function AboutWidget() {
  const t = useTranslation();

  return (
    <section
      id="about"
      className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container className="max-w-[1500px]">
        <div className="mx-auto max-w-[1280px]">

          {/* Eyebrow + Headline + Subline */}
          <AnimateOnScroll>
            <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--panel)]/60 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-[var(--muted)] shadow-sm">
              <FiUser size={16} />
              {t.about.eyebrow}
            </div>

            <h2 className="mx-auto mb-3 max-w-[760px] text-center text-3xl font-black leading-tight tracking-[-0.02em] text-[var(--text)] md:text-4xl">
              {t.about.heading}
            </h2>

            <p className="mx-auto mb-10 max-w-[680px] text-center text-base leading-relaxed text-[var(--muted)]">
              {t.about.subline}
            </p>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

            {/* Định hướng */}
            <AnimateOnScroll delay={0.1} className="md:col-span-2">
              <AboutCard
                icon={<FiTarget size={18} />}
                label={t.about.orientation.label}
                title={t.about.orientation.title}
              >
                {t.about.orientation.body}
              </AboutCard>
            </AnimateOnScroll>

            {/* Education */}
            <AnimateOnScroll delay={0.2} x={-30} y={0} className="h-full">
              <EducationCard />
            </AnimateOnScroll>

            {/* Experience */}
            <AnimateOnScroll delay={0.3} x={30} y={0} className="h-full">
              <ExperienceCard />
            </AnimateOnScroll>

            {/* Sở thích */}
            <AnimateOnScroll delay={0.1} className="md:col-span-2">
              <AboutCard
                icon={<FiHeart size={18} />}
                label={t.about.hobbies.label}
                title={t.about.hobbies.title}
              >
                {t.about.hobbies.body}
              </AboutCard>
            </AnimateOnScroll>

          </div>
        </div>
      </Container>
    </section>
  );
}

function EducationCard() {
  const t = useTranslation();

  return (
    <article className="h-full group relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--page-bg)] p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--panel)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:p-7">
      <SectionTitle icon={<FiBookOpen size={18} />} title={t.about.education.title} />

      <div className="relative mt-8 pl-7">
        <span className="absolute left-[7px] top-2 h-full w-px bg-[var(--border)]" />
        <span className="absolute left-0 top-2 h-3 w-3 rounded-full border border-[var(--accent)] bg-[var(--panel)]" />

        <h3 className="text-xl font-black text-[var(--text)]">
          {t.about.education.school}
        </h3>
        <p className="mt-3 text-base font-semibold text-[var(--accent)]">
          {t.about.education.major}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
          <FiCalendar size={15} />
          <span>{t.about.education.time}</span>
        </div>
      </div>
    </article>
  );
}

function ExperienceCard() {
  const t = useTranslation();

  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--page-bg)] p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--panel)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:p-7">
      <SectionTitle icon={<FiBriefcase size={18} />} title={t.about.experience.title} />

      <div className="relative mt-8 pl-7">
        <span className="absolute left-[7px] top-2 h-full w-px bg-[var(--border)]" />
        <span className="absolute left-0 top-2 h-3 w-3 rounded-full border border-[var(--accent)] bg-[var(--panel)]" />

        <h3 className="text-xl font-black text-[var(--text)]">
          {t.about.experience.project}
        </h3>
        <p className="mt-3 text-base font-semibold text-[var(--accent)]">
          {t.about.experience.stack}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
          <FiCalendar size={15} />
          <span>{t.about.experience.time}</span>
        </div>
        <ul className="mt-5 space-y-3 text-[var(--muted)]">
          {t.about.experience.items.map((item, idx) => (
            <ExperienceItem key={idx}>{item}</ExperienceItem>
          ))}
        </ul>
      </div>
    </article>
  );
}

function AboutCard({ icon, label, title, children, className = '' }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--page-bg)] p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--panel)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] md:p-7 ${className}`}
    >
      <IconBox className="mb-4">{icon}</IconBox>

      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)] transition duration-300 ease-out group-hover:text-[var(--accent)]">
        {label}
      </p>

      <h3 className="mb-3 text-base font-black text-[var(--text)] transition duration-300 ease-out group-hover:translate-x-1 md:text-lg">
        {title}
      </h3>

      <div className="text-[15px] leading-8 text-[var(--muted)]">
        {children}
      </div>
    </article>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="group flex items-center gap-4">
      <IconBox>{icon}</IconBox>
      <h2 className="text-2xl font-black text-[var(--text)] md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function ExperienceItem({ children }) {
  return (
    <li className="flex gap-3 leading-7">
      <FiArrowRight className="mt-1.5 shrink-0 text-[var(--accent)]" />
      <span>{children}</span>
    </li>
  );
}

function IconBox({ children, className = '' }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--panel)] text-[var(--accent)] shadow-sm transition duration-200 ease-out group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-[var(--button-text)] ${className}`}
    >
      {children}
    </div>
  );
}