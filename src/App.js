import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
