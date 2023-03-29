import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const ActivityCard = ({ item }) => {
  const { title, uuid, cover_image_url, url, description } = item;
  const navigate = useNavigate();

  const onHandleClick = () => navigate(`${uuid}`);

  return (
    <div onClick={onHandleClick} className={styles.ActivityCard}>
      <img src={cover_image_url} alt={title} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;

// "title": "Vista sul litorale e tour di gruppo di Monte Carlo da Nizza",
// "cover_image_url": "https://images.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg",
// "url"
// "description": "Goditi la vista sulla costa della riviera francese e dei suoi villaggi e città più famosi, grazie a questo tour di gruppo",
// "about": "Goditi la vista sulla costa della Costa Azzurra e dei suoi villaggi e città più famosi, come Eze e Monaco, grazie a questo tour di gruppo da Nizza. Prelievo direttamente dal tuo alloggio a Nizza.Godrai della vista panoramica di Villefranche su Cap Ferrat, la Baia dei Milionari e le sue famose ville. Visiterai il villaggio di Eze e godrai di una visita guidata gratuita della fabbrica di profumi Fragonard. Partirai quindi per La Turbie, dove vedrai le superbe vedute che offre il Principato.L'ultima tappa del tour sarà Monaco, dove avrai la possibilità di vedere il palazzo del Principe, il circuito di Formula 1 e il famoso casinò.",
