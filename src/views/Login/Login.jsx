import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css'; 
import { validateLogin } from '../../helpers/validateLogin';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux-toolkit/slices/userSlice'; 
import Swal from 'sweetalert2';

const Login = () => {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const [touched, setTouched] = useState({
        username: false,
        password: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateLogin(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:3000/users/login', userData);
                dispatch(addUser(response.data.user));

                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Has iniciado sesión exitosamente.',
                    icon: 'success',
                    confirmButtonColor: '#ffcc00',
                    background: '#000',
                    color: '#ffcc00',
                });

                setUserData({ username: "", password: "" });
                setRedirectToHome(true);
            } catch (error) {
                // Mostrar el mensaje de error si la autenticación falla
                Swal.fire({
                    title: 'Error de autenticación',
                    text: error.response?.data?.message || 'Usuario o contraseña incorrectos. Intenta de nuevo.',
                    icon: 'error',
                    confirmButtonColor: '#ffcc00',
                    background: '#000',
                    color: '#ffcc00',
                });
            }
        }

        setIsSubmitting(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleFocus = (event) => {
        const { name } = event.target;
        setErrors({ ...errors, [name]: "" });
    };

    useEffect(() => {
        if (touched.username || touched.password) {
            const validationErrors = validateLogin(userData);
            setErrors(validationErrors);
        }
    }, [userData, touched]);

    if (redirectToHome) {
        return <Navigate to="/home" />;
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Iniciar Sesión</h2>

            <div className={styles.formGroup}>
                <label>Nombre de Usuario:</label>
                <input
                    type='text'
                    value={userData.username}
                    name='username'
                    placeholder='usuario123'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                {touched.username && errors.username && <span className={styles.error}>{errors.username}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Contraseña:</label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    name='password'
                    placeholder='*********'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    disabled={!userData.username || errors.username}
                />
                {touched.password && errors.password && <span className={styles.error}>{errors.password}</span>}
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}>
                    {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                </button>
            </div>

            <button type='submit' disabled={isSubmitting || Object.keys(errors).length > 0}>
                {isSubmitting ? 'Ingresando...' : 'Ingresar'}
            </button>
            <Link to="/register">¿Aún no tienes usuario? Regístrate Ahora</Link>
        </form>
    );
};

export default Login;
