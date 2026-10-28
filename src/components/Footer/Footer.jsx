import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.flex}>
        <p>© The Odin Project</p>
        <p>Objects for a slower, fuller life. </p>
      </div>
    </footer>
  );
}

export default Footer;
