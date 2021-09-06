import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <About/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
