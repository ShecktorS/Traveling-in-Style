import styles from "../styles/pages/home.module.scss";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.Home}>
      <div className={styles.content}>
        <h1>Home Page</h1>
        {searchParams.get("query") ? (
          <>
            <h3>{`La ricerca ${searchParams.get(
              "query"
            )} non ha portato risultati!`}</h3>
          </>
        ) : (
          <p>Ciao, questa non è la pagina di ricerca (●'◡'●)</p>
        )}
      </div>
    </div>
  );
}

export default Home;
