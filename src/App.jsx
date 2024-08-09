import Cards from "./components/cards";
import Banner from "./components/Banner";
import bannerImage from "/image/Merja-blog-website.jpg";
import "./App.css";

function App() {
  return (
    <div className="appBody">
      <Banner />
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "100vw 100vh",
        }}
      >
        <div style={{ color: "white", fontSize: "45px", fontWeight: "bold" }}>
          Olympics Paris 2024
          <div className="searchBox">
            <input type="text" style={{ width: "40%", height: "40px" }} />
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
      <div className="newsCards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
