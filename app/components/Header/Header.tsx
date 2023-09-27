import { Link } from "@remix-run/react";
import styles from "./header.module.css";

export const Header: React.FunctionComponent = () => (
  <header className={styles.wrapper}>
    <div className={styles.container}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className={styles.logo} src={"../../icon.png"} alt="" />
        <h1 className={styles.title}>{`< built by chin2km />`}</h1>
      </Link>
      <nav className={styles.navbar}>
        <Link to="/">{`< home />`}</Link>
        <Link to="/contact">{`< contact />`}</Link>
      </nav>
    </div>
  </header>
);
