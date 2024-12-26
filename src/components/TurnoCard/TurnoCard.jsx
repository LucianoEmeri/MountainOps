import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import styles from './TurnoCard.module.css';

const Turno = ({ time, date, description, status, onCancel }) => {
  const isCancelled = status && status.toLowerCase() === 'canceled';

  const statusTranslation = {
    canceled: 'Cancelado',
    active: 'Activo',
  };

  const statusText = status ? statusTranslation[status.toLowerCase()] || 'Sin estado' : 'Sin estado';
  const statusClass = status ? styles[status.toLowerCase()] : '';

  const handleCancel = () => {
    // Mostramos una confirmación antes de cancelar el turno
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Vas a cancelar este turno.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar turno',
      cancelButtonText: 'No, mantener turno',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamamos a la función de cancelación si el usuario confirma
        onCancel();
      }
    });
  };

  return (
    <div className={styles.container}>
      <h4>Hora: {time}</h4>
      <h4>Fecha: {date}</h4>
      <h4>Descripción: {description}</h4>
      <h4 className={statusClass}>Estado: {statusText}</h4>

      <button
        disabled={isCancelled}
        onClick={handleCancel}  // Usamos la nueva función handleCancel
        className={isCancelled ? styles.disabledButton : styles.cancelButton}
      >
        {isCancelled ? "Turno Cancelado" : "Cancelar Turno"}
      </button>
    </div>
  );
};

Turno.propTypes = {
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
};

export default Turno;
