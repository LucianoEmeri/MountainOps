import styles from "./ImgTextAbout.module.css";
import textImg from "../../assets/10.jpg"
import textImg2 from "../../assets/9.jpg"

const ImgTextAbout = () => {
    return (
        <div className={styles.container}>
            <p>
                Somos un equipo apasionado por el deporte y la aventura, dedicado a ofrecerte una experiencia de juego organizada y sin complicaciones. Nuestra plataforma está diseñada específicamente para los entusiastas del airsoft, brindándote una forma eficiente de gestionar tus partidas, turnos y eventos.
                <br />
                <img src={textImg} />
                {/* Entendemos la importancia de la organización y la puntualidad en cada partida. Con años de experiencia en el campo de batalla, sabemos lo frustrante que puede ser la falta de coordinación y la pérdida de tiempo. Por eso, decidimos crear una solución que facilite la gestión de turnos y eventos, asegurando que cada partida se desarrolle de manera fluida y ordenada. */}
                Nuestra misión es simplificar la gestión de turnos y eventos de airsoft para que puedas concentrarte en lo que realmente importa: ¡disfrutar del juego! Queremos que cada jugador tenga acceso a una herramienta que le permita registrarse fácilmente, ver los horarios de los turnos, y recibir notificaciones oportunas para no perderse ninguna partida.
                <img src={textImg2} />
            </p>
        </div>
    );
};

export default ImgTextAbout;
