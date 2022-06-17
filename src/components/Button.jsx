import React from "react";

import styles from "../styles/Global";

function Button({ iconUrl, url }) {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(url, "_blank")}>
      <img src= {iconUrl} alt="expo icon" className= {styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
      <p className= {`font-normal text-xs ${styles.btnText}`}>View at on</p>
      <p className= {`text-sm font-bold  ${styles.btnText}`}>Expo Store</p>
      </div>
    </div>
  );
}

export default Button;
