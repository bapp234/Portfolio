import { Container } from '@/shared/ui';
import { DeveloperIdCard } from './DeveloperIdCard';
import { useTranslation } from '@/shared/hooks/useTranslation';
import {
  FiDatabase,
  FiGithub,
  FiMail,
  FiServer,
} from 'react-icons/fi';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';

export function HeroWidget() {
  const t = useTranslation();

  const rolePairs = [];
  for (let i = 0; i < t.hero.roles.length; i += 2) {
    rolePairs.push(`${t.hero.roles[i]} / ${t.hero.roles[i + 1] || ''}`);
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container className="max-w-[1500px]">
        <div
          className="
            grid
            gap-10
            md:grid-cols-[0.9fr_1.1fr]
            md:items-stretch
            lg:gap-12
          "
        >
          {/* Left visual card */}
          <AnimateOnScroll>
            <div className="flex items-center justify-center md:justify-end">
              <DeveloperIdCard />
            </div>
          </AnimateOnScroll>

          {/* Right content */}
          <div
            className="
              flex
              h-full
              w-full
              max-w-[760px]
              flex-col
              justify-between
              self-stretch
              py-2
            "
          >
            {/* Top content */}
            <div>
              <AnimateOnScroll delay={0.1}>
                {/* Small intro badge */}
                <div
                  className="
                  group
                  mb-8
                  inline-flex
                  w-fit
                  max-w-full
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--panel)]/75
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-[var(--accent)]
                  shadow-sm
                  backdrop-blur-sm
                  transition
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:bg-[var(--panel)]
                  hover:shadow-md
                "
                >
                  <span
                    className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--accent)]
                    text-[var(--button-text)]
                    transition
                    duration-300
                    ease-out
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                  >
                    <FiServer className="text-sm" />
                  </span>

                  <div className="relative w-[230px] overflow-hidden sm:w-[360px]">
                    <div className="role-marquee flex w-max items-center gap-3 whitespace-nowrap">
                      {t.hero.roles.map((role, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <RoleText>{role}</RoleText>
                          {idx < t.hero.roles.length - 1 && <RoleDot />}
                        </div>
                      ))}

                      {/* Duplicate for smooth loop */}
                      {t.hero.roles.map((role, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-3">
                          <RoleText>{role}</RoleText>
                          {idx < t.hero.roles.length - 1 && <RoleDot />}
                        </div>
                      ))}
                    </div>
                  </div>


                </div></AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>

                {/* Main heading */}
                <h1
                  className="
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[var(--text)]
                  sm:text-5xl
                  lg:text-6xl
                "
                >
                  {t.hero.heading}
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>

              <p
                className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[var(--muted)]
                sm:text-lg
  "
              >
                {t.hero.description}
              </p>
              </AnimateOnScroll>
                      <AnimateOnScroll delay={0.4}>

              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {t.hero.focusItems.map((item, idx) => (
                  <HeroFocusItem
                    key={idx}
                    icon={idx === 0 ? <FiServer /> : idx === 1 ? <FiDatabase /> : <FiGithub />}
                    title={item.split(' / ')[0]}
                    description={item.split(' / ')[1] || ''}
                  />
                ))}
              </div>
              </AnimateOnScroll>
            </div>
                <AnimateOnScroll delay={0.5}>
            {/* Bottom content */}
            <div className="mt-10 flex flex-wrap gap-4 md:mt-0">
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--accent)]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-[var(--button-text)]
                  shadow-sm
                  transition
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:bg-[var(--accent-hover)]
                  hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]
                "
              >
                {t.hero.cta.viewProjects}
              </a>

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--panel)]/70
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-[var(--text)]
                  shadow-sm
                  backdrop-blur-sm
                  transition
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  hover:bg-[var(--panel)]
                  hover:shadow-md
                "
              >
                <FiMail
                  className="
                    transition
                    duration-300
                    ease-out
                    group-hover:scale-110
                  "
                />
                {t.hero.cta.contactMe}
              </a>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroFocusItem({ icon, title, description }) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--panel)]/55
        p-4
        shadow-sm
        backdrop-blur-sm
        transition
        duration-300
        ease-out
        hover:-translate-y-1
        hover:bg-[var(--panel)]
        hover:shadow-md
      "
    >
      <div
        className="
          mb-3
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-[var(--accent)]
          text-[var(--button-text)]
          transition
          duration-300
          ease-out
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <h3 className="text-sm font-black text-[var(--text)]">
        {title}
      </h3>

      <p className="mt-1 text-xs font-medium text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}

function RoleText({ children }) {
  return (
    <span className="text-sm font-bold text-[var(--accent)]">
      {children}
    </span>
  );
}

function RoleDot() {
  return (
    <span className="h-1.5 w-1.5 rounded-full bg-green-600 shadow-[0_0_0_4px_rgba(22,163,74,0.12)]" />
  );
}