import styles from "./ImgTextAbout.module.css";
import textImg from "../../assets/10.jpg";  // Importa las imágenes
import textImg2 from "../../assets/9.jpg"; // Importa las imágenes

const ImgTextAbout = () => {
    return (
        <div className={styles.container}>
            <p>
                Somos un equipo apasionado por el deporte y la aventura, dedicado a ofrecerte una experiencia de juego organizada y sin complicaciones. Nuestra plataforma está diseñada específicamente para los entusiastas del airsoft, brindándote una forma eficiente de gestionar tus partidas, turnos y eventos.
                <br />
                <img src={textImg} alt="Imagen 1" /> 
                Nuestra misión es simplificar la gestión de turnos y eventos de airsoft para que puedas concentrarte en lo que realmente importa: ¡disfrutar del juego! Queremos que cada jugador tenga acceso a una herramienta que le permita registrarse fácilmente, ver los horarios de los turnos, y recibir notificaciones oportunas para no perderse ninguna partida.
                <img src={textImg2} alt="Imagen 2" /> 
            </p>
        </div>
    );
};

export default ImgTextAbout;
