import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
   return (
      <main>
         <Header />
         <Showcase />
         <About />
         <Projects />
         <Contact />
      </main>
   );
}

export default App;
