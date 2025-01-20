import { Link } from 'react-router-dom';
import styles from './Error404.module.css';

const Error404 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <p className={styles.errorMessage}>¡Ups! La página que buscas no existe.</p>
                <Link to="/" className={styles.backHome}>Regresar a la página principal</Link>
            </div>
        </div>
    );
};

export default Error404;
