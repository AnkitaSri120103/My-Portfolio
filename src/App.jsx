import "./app.scss"
import Test from "./Test"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skills from "./components/Skills/Skills";
const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section id="About"><Skills/></section>
    <section><Services /></section>
    <section id="Projects"><Parallax type="projects" /></section>
    <Project />
    <section id="Contact">
      <Contact />
    </section>
    {/*<Test/>
    <Test/>*/}
  </div>;
};

export default App;
