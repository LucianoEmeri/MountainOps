import textImg from "../../assets/2.jpg"
import styles from "./ImgText2.module.css";

const ImgText2 = () => {
    return (
        <div className={styles.container}>
            <img src={textImg} />
            <p>
            <span className={styles.highlight}>¿Cómo Funciona?</span> Registro Rápido y Fácil:
            Ingresa tus datos personales y crea tu perfil.
            Accede a la lista de turnos disponibles y elige el que mejor se adapte a tu horario.
            </p>
        </div>    
    );
};

export default ImgText2;