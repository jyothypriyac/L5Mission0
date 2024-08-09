import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <div className={styles.userContainer}>
      {/* <img src='./image/cake.jpeg.png' />
       <div className={styles.containerBottom}>
       <h1>jyothy</h1>
       <h3>priya</h3>
       </div> */}
      <div className={styles.card}>
        <img className={styles.cardImage} src="/image/download.jpg" />
        <div className={styles.headingDiv}>
          <div className={styles.heading}>
            {" "}
            Rebecca Petch, Shaane Fulton and Ellesse Andrews
          </div>
          <div className={styles.subHeading}>Three-woman sprint relay </div>
        </div>
      </div>
    </div>
  );
}
