import { DiRuby } from "react-icons/di";
import styles from "./Banner.module.css";

export default function () {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className={styles.nav}>
      <div style={{ width: "20%", fontWeight: "bold" }}>
        {" "}
        <DiRuby />
        DIGITAL NEWS
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "10%",
          width: "80%",
        }}
      >
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <button style={{ margin: "1%" }}>Login</button>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onclick="myFunction()"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
