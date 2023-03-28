import styles from "./index.module.scss";
import Navbar from "../navbar";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h3>Logo</h3>
      <input type="text" name="search" id="search" placeholder="Search..." />
      <Navbar />
      <button>Login</button>
    </div>
  );
};

export default Header;
