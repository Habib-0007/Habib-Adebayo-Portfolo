import Header from "./components/Header";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const HomePage = () => {
  return (
    <section>
       <Header />
         <Showcase />
         <About />
         <Projects />
         <Contact />
    </section>
  )
}

export default HomePage;