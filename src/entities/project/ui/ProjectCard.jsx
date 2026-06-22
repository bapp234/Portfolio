export function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={project.githubUrl}
          className="text-sm font-medium text-slate-900 underline dark:text-white"
        >
          GitHub
        </a>

        <a
          href={project.demoUrl}
          className="text-sm font-medium text-slate-900 underline dark:text-white"
        >
          Demo
        </a>
      </div>
    </article>
  );
}