import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
    <title>Danielamb</title>
      <NavBar />
    
      <Home />
    
      <About />

      <Portfolio />
      <Experience />
    <br>
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
