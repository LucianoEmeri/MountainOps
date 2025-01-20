import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; 
import logo from '../../assets/ico.svg'; 

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 

    return (
        <div className={styles.navbar}>
            <Link to="/home" className={styles["navbar-logo-link"]}>
                <div className={styles["navbar-logo"]}>
                    <img src={logo} alt="logo" className={styles["navbar-logo-img"]} />
                    <span className={styles["navbar-logo-text"]}>Mountain Ops</span>
                </div>
            </Link>
            {/* Menú de navegación */}
            <div className={`${styles["navbar-menu"]} ${isMenuOpen ? styles["open"] : ""}`}>
                <Link to="/home" className={styles["navbar-link"]}>Inicio</Link>
                <Link to="/appointments" className={styles["navbar-link"]}>Mis Turnos</Link>
                <Link to="/about" className={styles["navbar-link"]}>Nosotros</Link>
                <Link to="/login" className={styles["navbar-link"]}>Iniciar Sesión</Link>
            </div>
            {/* Menú hamburguesa */}
            <div className={styles["navbar-hamburger"]} onClick={toggleMenu}>
                <div className={styles["hamburger-line"]}></div>
                <div className={styles["hamburger-line"]}></div>
                <div className={styles["hamburger-line"]}></div>
            </div>
        </div>
    );
};

export default NavBar;
