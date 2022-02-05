import "./App.css";
import About from "./components/about/about";
import Heading from "./components/heading/heading";
import Hexagon from "./components/hexagonal_navigation/hexagonal";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./components/services/service";
import Resume from "./components/resume/resume";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Hexagon></Hexagon>
      <About></About>
      <Service></Service>
      <Resume></Resume>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
}

export default App;
