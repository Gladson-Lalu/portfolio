import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// import About from "./components/about/about";
import Heading from "./components/heading/heading";
// import Hexagon from "./components/hexagonal_navigation/hexagonal";
// import Service from "./components/services/service";
// import Resume from "./components/resume/resume";
// import Works from "./components/works/works";
// import Contact from "./components/contact/contact";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Heading></Heading>
      {/* <Hexagon></Hexagon>
      <About></About>
      <Service></Service>
      <Resume></Resume>
      <Works></Works>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
