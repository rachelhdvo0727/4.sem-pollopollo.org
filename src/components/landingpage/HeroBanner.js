import React from "react";
import styles from "./LandingPage.module.scss";
import landingpageimg from "../../images/landing-page-banner.png";
import scrollbtn from "../../svg/scroll-button.svg";

export default function HeroBanner() {
  return (
    <section className={styles.flex}>
      <div className={styles.flex__left}>
        <div className={styles.padding__left__large}>
          <h1>
            We bring donors, applicants, and providers of physical products
            together.
          </h1>
          <p>
            Program started in 2018 and represent effective way to reduce
            poverty and hunger in Venezuela.
          </p>
          <button className="btn rounded btn-secondary">Donate</button>
        </div>
      </div>
      <div className={styles.flex__right}>
        <img src={landingpageimg} alt="hero banner" />
        <div className={styles.purplebox__large}></div>
      </div>
    </section>
  );
}