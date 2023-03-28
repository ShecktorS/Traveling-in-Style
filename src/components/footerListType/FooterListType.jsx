import styles from "./index.module.scss";

const FooterListType = ({ title, items }) => {
  return (
    <div className={styles.FooterListType}>
      <h3>{title}</h3>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
      <li>{items[3]}</li>
    </div>
  );
};
export default FooterListType;
