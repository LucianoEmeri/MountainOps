import textImg from "../../assets/3.jpg"
import styles from "./ImgText.module.css";

const ImgText3 = () => {
    return (
        <div className={styles.container}>
            <img src={textImg} />
            <p>
            <span className={styles.highlight}>Reserva tu Turno:</span> Selecciona el turno que prefieras y confirma tu asistencia. Recibirás un correo de confirmación con los detalles de tu reserva.
            </p>
        </div>    
    );
};

export default ImgText3;