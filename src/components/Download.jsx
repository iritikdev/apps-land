import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite} `}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.heading} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.paragraph} ${styles.blackText}`}>Get the full source code on GitHub</p>
        </div>
        <button className={`${styles.btnPrimary} hover:-translate-y-1 transition delay-75`}>Source Code</button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}
export default Download;
