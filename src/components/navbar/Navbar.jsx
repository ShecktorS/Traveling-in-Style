import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <li>
        <Link to="activities">Activities</Link>
      </li>
      <li>
        <Link to="city/:id">Cities</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="/">Book Now</Link>
      </li>
    </ul>
  );
};

export default Navbar;
