import React from "react";

import assets from "../assets";
import styles from "../styles/Global";
import Button from "./Button";

function Section({ title, description, image, showButton, banner, reverse }) {
  return (
    <div
      className={`min-h-screen ${styles.section} ${banner} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      }`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:w-3/4 ${
          reverse ? styles.boxReverseClass : styles.boxClass
        }`}
      >
        <div
          className={`${styles.descriptionContainer} ${
            reverse ? " fadeRightMini" : " fadeLeftMini"
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${styles.heading} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.description} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showButton && (
            <Button
              iconUrl={assets.expo}
              link="https://expo.dev/@adrianhajdin/react_native_app?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={image}
            alt="mockup"
            className={`${styles.sectionImg} ${
              reverse ? " fadeLeftMini" : " fadeRightMini"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
