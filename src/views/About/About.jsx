import styles from "../About/About.module.css";
import ImgTextAbout from "../../components/ImgText/ImgTextAbout";

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title1}>Sobre Nosotros</h1>
            <h3 className={styles.title3}>¿Quiénes somos?</h3>
            <ImgTextAbout/>
        </div>
    );
};

export default About;
