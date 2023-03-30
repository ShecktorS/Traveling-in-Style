import styles from "./id.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { city } from "../../mocks/city";

const Activity = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  useEffect(() => {
    fetch()
      // .then((res) => res.json())
      .then(setActivity(city));
  }, []);

  return (
    <div className={styles.Activity}>
      <h1>{activity.title}</h1>
      <p>{activity.about}</p>

      <p>
        <em>{id}</em>
      </p>

      <img src={activity.cover_image_url} alt="" />

      {activity.verticals?.map((cat) => (
        <h3 className={styles.cat}>{cat.name}</h3>
      ))}
    </div>
  );
};

export default Activity;
