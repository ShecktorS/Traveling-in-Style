import styles from "./id.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Activity = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  useEffect(() => {
    fetch(`https://api.musement.com/api/v3/activities/${id}.json`)
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);

  return (
    <div className={styles.Activity}>
      <h1>{activity.title}</h1>
      <p>{activity.about}</p>
      <img src={activity.cover_image_url} alt="" />
    </div>
  );
};

export default Activity;
