const About = () => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">About Me</h2>
      <div className="space-y-5 leading-relaxed text-gray-700">
        <p>
          I have always been drawn to new technology. After working in the
          mining and automotive industries, I transitioned into software
          development to combine my technical troubleshooting experience with
          programming and build practical solutions to real-world problems.
        </p>
        <p className="mt-6 max-w-2xl">
          I recently completed a{" "}
          <strong className="font-semibold text-gray-900">
            Certificate IV in Information Technology (Programming){" "}
          </strong>
          and am currently expanding my skills in{" "}
          <strong className="font-semibold text-gray-900">
            React, TypeScript, and SQL.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default About;
