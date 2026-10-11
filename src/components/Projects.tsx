import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
