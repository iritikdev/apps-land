import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ icon, name }) => {
  return (
    <div className={`${styles.featureCard} hover:-translate-y-1 transition delay-75`}>
      <img src={icon} alt="" className={styles.featureImg} />
      <p className={styles.featureText}>{name}</p>
    </div>
  );
};

function Features(props) {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.heading} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.paragraph} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native
          </p>
          <div className={styles.flexWrap}>
            <FeatureCard icon={assets.react} name={"React Native"} />
            <FeatureCard icon={assets.javascript} name={"JavaScript"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
