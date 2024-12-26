import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    turnos: [],
};

const turnoSlice = createSlice({
    name: 'turnos',
    initialState,
    reducers: {
        // Acción para cargar los turnos del usuario
        setTurnos: (state, action) => {
            // console.log('Acción setTurnos despachada con los siguientes turnos:', action.payload); // Verifica los turnos antes de almacenarlos
            state.turnos = action.payload; // Asignar los turnos al estado global
        },
        // Acción para agregar un nuevo turno
        addTurno: (state, action) => {
            state.turnos.push(action.payload); // Añadir el nuevo turno
        },
        // Acción para cancelar un turno
        cancelTurno: (state, action) => {
            state.turnos = state.turnos.map(turno =>
                turno.id === action.payload ? { ...turno, status: 'Cancelled' } : turno
            );
        },
    },
});

export const { setTurnos, addTurno, cancelTurno } = turnoSlice.actions;
export default turnoSlice.reducer;
