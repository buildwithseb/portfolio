import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero></Hero>
      <main className="mx-auto max-w-5xl space-y-10 px-6 py-12">
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
