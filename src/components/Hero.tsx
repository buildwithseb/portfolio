import profileImage from "/public/profile.png";

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

        <div className="h-52 w-52 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img
            src={profileImage}
            alt="Profile portrait"
            className="h-full w-full scale-140 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
