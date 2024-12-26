import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../MisTurnos/MisTurnos.module.css";
import Turno from "../../components/TurnoCard/TurnoCard";
import CrearTurno from "../../components/CrearTurno/CrearTurno";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setTurnos } from '../../redux-toolkit/slices/turnoSlice';
import Swal from 'sweetalert2';

const MisTurnos = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const userLogged = useSelector((state) => state.user.userData);
    const turnos = useSelector((state) => state.turnos.turnos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userLogged) {
            setError(
                <div>
                    Debes <Link to="/login" className={styles.loginLink}>Iniciar sesión</Link> para ver y gestionar tus turnos.
                </div>
            );
            setLoading(false);
            return;
        }

        axios.get("http://localhost:3000/appointments")
            .then(res => {
                const userTurnos = res.data.filter(turno => turno.user.id === userLogged.id);
                dispatch(setTurnos(userTurnos));
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al cargar los turnos:', err);
                setError("Hubo un error al cargar los turnos");
                setLoading(false);
            });
    }, [userLogged, dispatch]);

    const handleCancel = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/appointments/cancel/${id}`);
            dispatch(setTurnos(turnos.map(turno =>
                turno.id === id ? { ...turno, status: "Cancelled" } : turno
            )));
            Swal.fire('Turno Cancelado', 'El turno se ha cancelado correctamente', 'success');
        } catch (error) {
            console.error("Error al cancelar el turno:", error);
            Swal.fire('Error', 'Hubo un error al cancelar el turno', 'error');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title1}>Mis Turnos</h1>

            {!userLogged ? (
                <div className={styles.noTurnos}>{error}</div>
            ) : (
                <>
                    {showForm ? (
                        <CrearTurno />
                    ) : (
                        <>
                            <h3 className={styles.title3}>Turnos del usuario:</h3>
                            <div className={styles.turnosContainer}>
                                {loading ? (
                                    <div className={styles.noTurnos}>Cargando turnos...</div>
                                ) : error ? (
                                    <div className={styles.noTurnos}>{error}</div>
                                ) : turnos.length ? (
                                    turnos.map(({ time, date, description, status, id }) => (
                                        <Turno
                                            key={id}
                                            time={time}
                                            date={date}
                                            description={description}
                                            status={status}
                                            id={id}
                                            onCancel={() => handleCancel(id)}
                                        />
                                    ))
                                ) : (
                                    <div className={styles.noTurnos}>No tienes turnos agendados.</div>
                                )}
                            </div>
                        </>
                    )}
                    <button className={styles.createTurnoButton} onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Cancelar Formulario" : "Agregar Turno"}
                    </button>
                </>
            )}
        </div>
    );
};

export default MisTurnos;
