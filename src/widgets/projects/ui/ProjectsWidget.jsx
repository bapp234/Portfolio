import { Container } from '@/shared/ui';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import { useTranslation } from '@/shared/hooks/useTranslation';
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from 'react-icons/fi';

export function ProjectsWidget() {
  const t = useTranslation();

  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container className="max-w-[1500px]">
        <div className="mx-auto max-w-[1280px]">
          {/* Eyebrow */}
          <AnimateOnScroll delay={0} y={20}>
            <div
              className="
                mx-auto
                mb-8
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--panel)]/60
                px-5
                py-2.5
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-[var(--muted)]
                shadow-sm
              "
            >
              <FiLayers size={16} />
              {t.projects.eyebrow}
            </div>
          </AnimateOnScroll>

          {/* Headline */}
          <AnimateOnScroll delay={0.1} y={20}>
            <h2
              className="
                mx-auto
                mb-3
                max-w-[760px]
                text-center
                text-3xl
                font-black
                leading-tight
                tracking-[-0.02em]
                text-[var(--text)]
                md:text-4xl
              "
            >
              {t.projects.heading}
            </h2>
          </AnimateOnScroll>

          {/* Subline */}
          <AnimateOnScroll delay={0.2} y={20}>
            <p
              className="
                mx-auto
                mb-10
                max-w-[720px]
                text-center
                text-base
                leading-relaxed
                text-[var(--muted)]
              "
            >
              {t.projects.subline}
            </p>
          </AnimateOnScroll>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {t.projects.items.map((project, index) => (
              <AnimateOnScroll
                key={project.title}
                delay={0.3 + index * 0.15} // Tăng delay cho mỗi cột
                y={40}
                className="h-full"
              >
                <ProjectCard project={project}
 />
              </AnimateOnScroll>
            ))}
          </div>
          
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        min-h-[520px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[var(--border)]
        bg-[var(--page-bg)]
        p-6
        shadow-sm
        transition
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-[var(--accent)]
        hover:bg-[var(--panel)]
        hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]
        md:p-7
      "
    >
      {/* Top visual */}
      <div
        className="
          relative
          mb-6
          flex
          h-40
          items-center
          justify-center
          overflow-hidden
          rounded-[20px]
          border
          border-[var(--border)]
          bg-[var(--panel)]/65
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_40%)]
          "
        />

        <div
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--panel)]
            text-[var(--accent)]
            shadow-sm
            transition
            duration-300
            ease-out
            group-hover:rotate-6
            group-hover:scale-110
            group-hover:border-transparent
            group-hover:bg-[var(--accent)]
            group-hover:text-[var(--button-text)]
          "
        >
          <FiCode size={26} />
        </div>

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--panel)]/80
            px-3
            py-1
            text-[11px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[var(--muted)]
            backdrop-blur-sm
          "
        >
          {project.label}
        </span>
      </div>

      {/* Content */}
      <p
        className="
          mb-1
          text-[11px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[var(--muted)]
          transition
          duration-300
          ease-out
          group-hover:text-[var(--accent)]
        "
      >
        {project.role}
      </p>

      <h3
        className="
          mb-3
          text-xl
          font-black
          leading-tight
          text-[var(--text)]
          transition
          duration-300
          ease-out
          group-hover:translate-x-1
        "
      >
        {project.title}
      </h3>

      <p className="text-[15px] leading-8 text-[var(--muted)]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--panel)]/60
              px-3
              py-1
              text-xs
              font-semibold
              text-[var(--muted)]
              transition
              duration-300
              ease-out
              group-hover:border-[var(--accent)]/60
              group-hover:text-[var(--text)]
            "
          >
            {item}
          </span>
        ))}
      </div>

      
      {/* Footer */}
      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <a
          href={project.demo}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[var(--accent)]
            px-4
            py-2.5
            text-sm
            font-bold
            text-[var(--button-text)]
            transition
            duration-300
            ease-out
            hover:-translate-y-0.5
            hover:bg-[var(--accent-hover)]
            hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]
          "
        >
          <FiExternalLink size={15} />
          Demo
        </a>

        <a
          href={project.github}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--panel)]/70
            px-4
            py-2.5
            text-sm
            font-bold
            text-[var(--text)]
            transition
            duration-300
            ease-out
            hover:-translate-y-0.5
            hover:bg-[var(--panel)]
            hover:shadow-md
          "
        >
          <FiGithub size={15} />
          Source
        </a>
      </div>

      <FiArrowUpRight
        className="
          absolute
          right-6
          top-6
          text-[var(--muted)]
          opacity-0
          transition
          duration-300
          ease-out
          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:text-[var(--accent)]
          group-hover:opacity-100
        "
        size={20}
      />
    </article>
  );
}

function ProjectHighlight({ children }) {
  return (
    <div className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
      <FiDatabase className="mt-1.5 shrink-0 text-[var(--accent)]" size={15} />
      <span>{children}</span>
    </div>
  );
}