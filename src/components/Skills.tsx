const Skills = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Skills</h2>
      <div className="space-y-2 leading-relaxed text-gray-700">
        <p>
          <strong className="font-semibold text-gray-900">Frontend:</strong>{" "}
          HTML, CSS, React, JavaScript, TypeScript{" "}
        </p>
        <p>
          <strong className="font-semibold text-gray-900">Backend:</strong>{" "}
          Node.js, Express.js, REST APIs
        </p>
        <p>
          <strong className="font-semibold text-gray-900">Database:</strong>{" "}
          MongoDB / MongoDB Atlas
        </p>
        <p>
          <strong className="font-semibold text-gray-900">Tools:</strong>{" "}
          GitHub, VS Code, Webpack
        </p>
      </div>
    </section>
  );
};

export default Skills;
