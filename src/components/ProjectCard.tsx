import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="w-full rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-600 text-3xl font-bold text-white">
        {project.logo}
      </div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {project.title}
      </h3>
      <p className="mt-4 leading-relaxed text-gray-600">
        {project.description}
      </p>
      
      <ul className="mt-5 flex flex-wrap justify-center gap-2">
        {project.technologies.map(tech=> <li key= {tech} className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          {tech}
        </li> )}
      </ul>

      <div className="mt-6 flex justify-center gap-3">
       
        <a
          href= {project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Live Demo
        </a>
        <a
          href= {project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 "
        >
          Github
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
