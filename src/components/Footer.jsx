import React from "react";

import styles from "../styles/Global";
function Footer(props) {
  return (
    <div className="px-4 py-4 justify-center items-center bg-primary flex-col text-center banner04">
      <p className={`${styles.paragraph} ${styles.whiteText} text-base`}>
        Made with  by <span className="bold">Ritik Sharma</span>
      </p>
    </div>
  );
}

export default Footer;
