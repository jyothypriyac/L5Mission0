
import styles from "./Banner.module.css";
import bannerImage from "/image/Merja-blog-website.jpg";

export default function () {
  
  return (
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
  );
}
