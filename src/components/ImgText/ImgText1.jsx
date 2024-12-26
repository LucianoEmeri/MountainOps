import textImg from "../../assets/1.jpg"
import styles from "./ImgText.module.css";

const ImgText1 = () => {
    return (
        <div className={styles.container}>
            <img src={textImg} />
            <p>
            ¿Estás listo para una <span className={styles.highlight}>emocionante</span> partida de <span className={styles.highlight}>airsoft</span>?
            ¡Nosotros nos encargamos de organizar todo para que solo te preocupes por <span className={styles.highlight}>disfrutar</span>!
            </p>
        </div>    
    );
};

export default ImgText1;