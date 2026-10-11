import profileImage from "/public/profile.jpg";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-12 px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold md:text-5xl">Sebastien CHAMPEAU</h1>
          <h2 className="mt-4 text-xl text-blue-100">Software Developer</h2>
          <p className="mt-6 max-w-2xl text-gray-400">
            Software developer with a background in mining automation and
            industrial technology. I build practical web applications using
            modern technologies like React, JavaScript, Node.js, and MongoDB.
          </p>
        </div>
        <img
          src={profileImage}
          alt="Profile portrait"
          className="h-40 w-40 shrink-0 rounded-full border-4 border-white object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
