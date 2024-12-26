import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './NavBar.module.css';
import logo from '../../assets/ico.svg';
import { removeUser } from '../../redux-toolkit/slices/userSlice'; // Importamos la acción de logout
import Swal from 'sweetalert2'; // Importamos SweetAlert

const NavBar = () => {
    const userLogged = useSelector((state) => state.user.userData);
    const [hover, setHover] = useState(false); // Estado para manejar el hover
    const dispatch = useDispatch();
    const navigate = useNavigate();  // Hook para redirigir

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    const handleLogout = () => {
        // Mostramos una confirmación antes de proceder con el logout
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Vas a cerrar sesión y salir de tu cuenta.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
            customClass: {
                confirmButton: 'swal-confirm-button',
                cancelButton: 'swal-cancel-button'
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                // Despachamos la acción de logout
                dispatch(removeUser());

                // Limpiamos el token del localStorage o sessionStorage
                localStorage.removeItem('authToken');
                sessionStorage.removeItem('authToken');

                // Redirigimos al usuario a la página de login
                navigate('/login');
            }
        });
    };

    return (
        <div className={styles.navbar}>
            <Link to="/home" className={styles["navbar-logo-link"]}>
                <div className={styles["navbar-logo"]}>
                    <img src={logo} alt="logo" className={styles["navbar-logo-img"]} />
                    <span className={styles["navbar-logo-text"]}>Mountain Ops</span>
                </div>
            </Link>
            <div className={styles["navbar-menu"]}>
                <Link to="/home">Inicio</Link>
                <Link to="/appointments">Mis Turnos</Link>
                <Link to="/about">Nosotros</Link>
                {!userLogged || !userLogged.name ? (
                    <Link to="/login">Iniciar Sesión</Link>
                ) : (
                    <span
                        className={styles["navbar-user"]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleLogout} // Implementa la acción de logout con confirmación
                    >
                        {hover ? 'Cerrar sesión' : userLogged.name}
                    </span>
                )}
            </div>
        </div>
    );
};

export default NavBar;
