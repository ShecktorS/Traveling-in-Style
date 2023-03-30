import styles from "./id.module.scss";
import { useParams } from "react-router-dom";
import { activitiesData } from "../../mocks/musement.js";

const City = () => {
  const { id } = useParams();

  //   const searchedCity = activitiesData.filter(
  //     (item) => item.city.country.name.toLocaleLowerCase() == id.toLowerCase()
  //   );
  //   const { city } = searchedCity[0];
  //   console.log(city);
  //   const {
  //     name, //destrutturazione normale
  //     cover_image_url: url, //destrutturazione con assegnazione del nome
  //     country: { name: country }, //doppia destrutturazione con assegnazione del nome
  //   } = city;
  //   console.log(city);

  return (
    <div className={styles.City}>
      {activitiesData
        .filter(
          (item) =>
            item.city.country.name.toLocaleLowerCase() == id.toLowerCase()
        )
        .map(({ city }) => (
          <div key={city.id}>
            <h1>{city.name}</h1>
            <h2>{city.country.name}</h2>
            <img src={city.cover_image_url} alt="" />
          </div>
        ))}
    </div>
  );
};

export default City;
