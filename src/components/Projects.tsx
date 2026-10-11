import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">Projects</h2>
      <ProjectCard></ProjectCard>
    </section>
  );
};

export default Projects;
