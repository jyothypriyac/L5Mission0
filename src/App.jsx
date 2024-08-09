import Cards from "./components/cards";
import Banner from "./components/Banner";

import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="appBody">
      <Nav />
      <Banner />
     
      <div className="newsCards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
