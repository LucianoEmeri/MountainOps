import styles from "./Home.module.css";
import ImgText1 from "../../components/ImgText/ImgText1";
import ImgText2 from "../../components/ImgText/ImgText2";
import ImgText3 from "../../components/ImgText/ImgText3";
import ImgText4 from "../../components/ImgText/ImgText4";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.header}>Bienvenido a nuestros campos de Airsoft</h3>
                <ImgText1/>
                <ImgText2/>
                <ImgText3/>
                <ImgText4/>
                <Link to="/register" className={styles.unete}>ÚNETE AHORA</Link>
            </div>
        </>
    );
};

export default Home;
