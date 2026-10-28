import { Link } from "react-router";
import { ArrowRight, GitBranch } from "lucide-react";
import Hoodie from "#assets//images/hoodie Background Removed.png";
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      <section className={styles.preview}>
        <div className={styles["flex-container-1"]}>
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
              <span className={styles["heading-emphasis"]}>source code.</span>
            </h1>
            <p className={styles.subheading}>
              Thoughtfully made merch for developers, designers, and everyone
              who turns ideas into shipped products.
            </p>
            <Link
              className={styles.store}
              to="/
           store"
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
      <section className={styles.benefits}>
        <div className={styles["benefits-list"]}>
          <div className={styles["benefit-item"]}>
            <h2 className={styles["benefit-heading"]}>Made to stay.</h2>
            <p className={styles["benefit-description"]}>
              Thoughtful materials, timeless forms, no unnecessary noise.
            </p>
          </div>
          <div className={styles["benefit-item"]}>
            <h2 className={styles["benefit-heading"]}>Small batches.</h2>
            <p className={styles["benefit-description"]}>
              Produced with care by independent makers we know by name.
            </p>
          </div>
          <div className={styles["benefit-item"]}>
            <h2 className={styles["benefit-heading"]}>Feel good, too. </h2>
            <p className={styles["benefit-description"]}>
              Free shipping on orders over $100, always packed with intention.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
