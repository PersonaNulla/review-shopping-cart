import { Link } from "react-router";
import { ArrowRight, GitBranch } from "lucide-react";
import Hoodie from "#assets//images/hoodie Background Removed.png";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles["split-pane"]}>
        <div>
          <div className={styles.quote}>
            <GitBranch
              aria-hidden
              className={styles["quote-icon"]}
            />
            <p>GOODS FOR PEOPLE WHO BUILD THE FUTURE</p>
          </div>
          <h1 className={styles.heading}>
            Wear your
            <br />
            <span className={styles.emphasis}>source code.</span>
          </h1>
          <p className={styles.subheading}>
            Thoughtfully made merch for developers, designers, and everyone who
            turns ideas into shipped products.
          </p>
          <Link
            className={styles.store}
            to="/store"
          >
            Grab some merch
            <ArrowRight
              aria-hidden="true"
              className={styles["store-icon"]}
            />
          </Link>
        </div>
        <div className={styles["merch-preview"]}>
          <img
            className={styles["merch-preview-img"]}
            src={Hoodie}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
