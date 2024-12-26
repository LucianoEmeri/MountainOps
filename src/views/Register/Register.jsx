import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import { validateRegister } from '../../helpers/validateRegister';
import { Link, useNavigate } from 'react-router-dom';  
import Swal from 'sweetalert2';

const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        credential: {
            username: "",
            password: "",
        },
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        birthdate: false,
        nDni: false,
        username: false,
        password: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();  

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateRegister(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                await axios.post('http://localhost:3000/users/register', userData);
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Te has registrado exitosamente.',
                    icon: 'success',
                    confirmButtonColor: '#ffcc00',
                    background: '#000',
                    color: '#ffcc00',
                });
                navigate('/login');  
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Error de registro: ' + (error.response?.data?.message || error.message),
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
            [name]: value,
        });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    useEffect(() => {
        const validationErrors = validateRegister(userData);
        setErrors(validationErrors);
    }, [userData]);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Regístrate</h2>

            <div className={styles.formGroup}>
                <label>Nombre Completo:</label>
                <input
                    type='text'
                    value={userData.name}
                    name='name'
                    placeholder='Juan Pérez'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.name && errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Email:</label>
                <input
                    type='email'
                    value={userData.email}
                    name='email'
                    placeholder='juanperez@mail.com'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Fecha de Nacimiento:</label>
                <input
                    type='date'
                    value={userData.birthdate}
                    name='birthdate'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.birthdate && errors.birthdate && <span className={styles.error}>{errors.birthdate}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Número de DNI:</label>
                <input
                    type='text'
                    value={userData.nDni}
                    name='nDni'
                    placeholder='123456789'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.nDni && errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Nombre de Usuario:</label>
                <input
                    type='text'
                    value={userData.credential.username}
                    name='credential.username'
                    placeholder='juanperez'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.username && errors.username && <span className={styles.error}>{errors.username}</span>}
            </div>
            <div className={styles.formGroup}>
                <label>Contraseña:</label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={userData.credential.password}
                    name='credential.password'
                    placeholder='*********'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.password && errors.password && <span className={styles.error}>{errors.password}</span>}
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                </button>
            </div>

            <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Registrando...' : 'Registrar'}
            </button>
            <Link to="/login">¿Ya tienes usuario? Inicia sesión</Link>
        </form>
    );
};

export default Register;
