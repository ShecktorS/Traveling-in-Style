import styles from "./index.module.scss";
import FooterListType from "../footerListType";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__background}></div>
      <div className={styles.Footer__content}>
        <div className={styles.firstSection}>
          <h3>LOGO</h3>
          <FooterListType
            title={"Information"}
            items={["Adventure", "Book Now", "About", "Blogs"]}
          />
          <FooterListType
            title={"Quick Links"}
            items={["Tours", "Supports", "Privacy", "Affiliates"]}
          />
          <FooterListType
            title={"Contact"}
            items={[
              "123 Via Pieruccio, Bagheria, 90011",
              "+39 333232323",
              "travlinginstyle@gmail.com",
              "",
            ]}
          />
          <div className={styles.socials}>
            <img src="" alt=""></img>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <hr /> {/* or div */}
        <div className={styles.secondSection}>
          <p>© 2023, All Right Reserve</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
