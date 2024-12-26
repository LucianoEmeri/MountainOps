// redux-toolkit/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
  userData: null, // El estado inicial
};

// Crear el slice
const userSlice = createSlice({
  name: 'user', // El nombre del slice
  initialState, // El estado inicial
  reducers: {
    // Acción para agregar un usuario
    addUser: (state, action) => {
      state.userData = action.payload; // El payload contiene el objeto del usuario
    },
    // Acción para eliminar un usuario
    removeUser: (state) => {
      state.userData = null; // Eliminar los datos del usuario
    },
  },
});

// Exporta las acciones automáticamente generadas
export const { addUser, removeUser } = userSlice.actions;

// Exporta el reducer, que se usará en el store
export default userSlice.reducer;
