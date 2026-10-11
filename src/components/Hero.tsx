import profileImage from "/public/profile.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Sebastien CHAMPEAU
          </h1>
          <h2 className="mt-4 text-xl font-medium text-blue-300">
            Software Developer
          </h2>
          <p className="mt-6 leading-relaxed text-gray-300">
            Software developer with a background in mining automation and
            industrial technology. I build practical web applications using
            modern technologies like React, JavaScript, Node.js, and MongoDB.
          </p>
        </div>
        <img
          src={profileImage}
          alt="Profile portrait"
          className="h-40 w-40 shrink-0 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
