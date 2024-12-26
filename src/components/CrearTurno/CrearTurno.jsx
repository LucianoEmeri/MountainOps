import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTurno } from '../../redux-toolkit/slices/turnoSlice';
import axios from 'axios';
import styles from './CrearTurno.module.css';
import Swal from 'sweetalert2';

const CrearTurno = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    description: 'Operación montaña',
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTurno = {
      id: Date.now(),
      ...formData,
    };

    try {
      const response = await axios.post('http://localhost:3000/appointments/schedule', newTurno);
      dispatch(addTurno(response.data));

      Swal.fire('Turno Agregado', 'Tu turno ha sido agendado con éxito', 'success');

      setFormData({
        date: '',
        time: '',
        description: 'Operación montaña',
        status: 'Active',
      });
    } catch (error) {
      console.error('Error al agregar el turno:', error);
      Swal.fire('Error', 'Hubo un problema al agregar el turno. Inténtalo de nuevo.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Reservar Turno</h2>

      <label>Fecha:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label>Hora:</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label>Misión:</label>
      <select
        name="description"
        value={formData.description}
        onChange={handleChange}
      >
        <option value="Operación montaña">Operación montaña</option>
        <option value="Infiltración en el bosque">Infiltración en el bosque</option>
        <option value="Defiende la base">Defiende la base</option>
        <option value="Captura la bandera">Captura la bandera</option>
      </select>

      <button type="submit">Agregar Turno</button>
    </form>
  );
};

export default CrearTurno;
