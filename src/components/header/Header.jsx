import styles from "./index.module.scss";
import Navbar from "../navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const onHandleChange = (e) => setSearchedValue(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`cities/${searchedValue}`);
    setSearchedValue("");
  };

  const navigate = useNavigate();

  return (
    <div className={styles.Header}>
      <h3>Logo</h3>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={searchedValue}
          onChange={onHandleChange}
          required
          minLength={3}
        />
      </form>
      <Navbar />
      <button>Login</button>
    </div>
  );
};

export default Header;
