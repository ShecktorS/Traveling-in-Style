import styles from "./id.module.scss";
import { useParams } from "react-router-dom";
import { activitiesData } from "../../mocks/musement.js";

const City = () => {
  const { id } = useParams();

  //   console.log(activitiesData[0].city);

  //   console.log(activitiesData);

  return (
    <div className={styles.City}>
      <h1>{id}</h1>
      <h2>Pagina della città!</h2>
    </div>
  );
};

export default City;
