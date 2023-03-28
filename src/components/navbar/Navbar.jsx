import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <li>Activities</li>

      <li>Cities</li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>Book Now</li>
    </ul>
  );
};

export default Navbar;
