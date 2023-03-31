import styles from "./index.module.scss";
import Navbar from "../navbar";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [searchParams] = useSearchParams();

  const onHandleChange = (e) => setSearchedValue(e.target.value);
  const bestCities = ["italy", "spain", "france", "oman"]; // etc. only for example

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (bestCities.includes(searchedValue.toLowerCase())) {
      navigate(`cities/${searchedValue}`);
    } else {
      navigate(`/search?query=${searchedValue}`);
      // setSearchParams("query");
    }
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
          placeholder="spain, france, italy"
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
