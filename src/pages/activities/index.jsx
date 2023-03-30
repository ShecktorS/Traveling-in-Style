import styles from "../../styles/pages/activities.module.scss";
import ActivityCard from "../activityCard/ActivityCard";
import { useState, useEffect } from "react";
import { activitiesData } from "../../mocks/musement";

const Activities = () => {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    fetch() //"https://api.musement.com/api/v3/activities.json"
      // .then((res) => res.json())
      .then(setListCard(activitiesData));
  }, []);

  return (
    <div className={styles.Activities}>
      <h1>Activities</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        deserunt explicabo error, non ab excepturi!
      </h3>
      <div className={styles.list}>
        {listCard.map((item) => (
          <ActivityCard item={item} key={item.uuid} />
        ))}
      </div>
    </div>
  );
};

export default Activities;

// "title": "Vista sul litorale e tour di gruppo di Monte Carlo da Nizza",
// "cover_image_url": "https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg",
// "url"
// "description": "Goditi la vista sulla costa della riviera francese e dei suoi villaggi e città più famosi, grazie a questo tour di gruppo",
// "about": "Goditi la vista sulla costa della Costa Azzurra e dei suoi villaggi e città più famosi, come Eze e Monaco, grazie a questo tour di gruppo da Nizza. Prelievo direttamente dal tuo alloggio a Nizza.Godrai della vista panoramica di Villefranche su Cap Ferrat, la Baia dei Milionari e le sue famose ville. Visiterai il villaggio di Eze e godrai di una visita guidata gratuita della fabbrica di profumi Fragonard. Partirai quindi per La Turbie, dove vedrai le superbe vedute che offre il Principato.L'ultima tappa del tour sarà Monaco, dove avrai la possibilità di vedere il palazzo del Principe, il circuito di Formula 1 e il famoso casinò.",
