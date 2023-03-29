// Qui si deve creare la pagina principale di layout dove vanno importati tutti gli elementi che vogliamo rimangano fissi nella pagina

import styles from "./index.module.scss";

import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
