const Contact = () => {
  return (
    <section className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">Contact</h2>
      <a href="mailto:sechampeau72@gmail.com" className="text-blue-600">
        <strong className="font-semibold text-gray-900">Email:</strong>{" "}
        sechampeau72@gmail.com
      </a>
      <a href="https://github.com/buildwithseb" className="text-blue-600">
        <strong className="font-semibold text-gray-900">GitHub:</strong>{" "}
        buildwithseb
      </a>
      <a
        href="https://www.linkedin.com/in/sebastien-champeau-0a1b29150/"
        className="text-blue-600 "
      >
        <strong className="font-semibold text-gray-900">LinkedIn:</strong> View
        Profile
      </a>
    </section>
  );
};

export default Contact;
