import textImg from "../../assets/4.jpg"
import styles from "./ImgText2.module.css";

const ImgText4 = () => {
    return (
        <div className={styles.container}>
            <img src={textImg} />
            <p>
            <span className={styles.highlight}>¡Únete a Nosotros!</span> Regístrate ahora y comienza a vivir la emoción del airsoft con la mejor organización y comodidad. ¿Tienes alguna pregunta? No dudes en contactarnos, estamos aquí para ayudarte.
            </p>
        </div>    
    );
};

export default ImgText4;