



const ProjectCard = () => {
  return (
    <article className="w-80 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-600 text-3xl font-bold text-white">
        MH
      </div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        Maintenance Handover Dashboard
      </h3>
      <p className="mt-4 leading-relaxed text-gray-600">
        Full-stack shift handover application designed around mining maintenance
        workflows.
      </p>
      <ul className="mt-5 flex flex-wrap justify-center gap-2">
        <li className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          HTML
        </li>
        <li className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          Javascript
        </li>
        <li className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          CSS
        </li>
        <li className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          Node.js
        </li>
        <li className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          Express
        </li>
        <li className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
          MongoDB
        </li>
      </ul>

      <div className="mt-6 flex justify-center gap-3">
        {" "}
        <a
          href="..."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Live Demo
        </a>
        <a
          href="..."
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
