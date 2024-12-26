// redux-toolkit/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';  // Reducer para el usuario
import turnoReducer from './slices/turnoSlice'; // Reducer para los turnos

// Función para cargar el estado desde localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.error("Error al cargar el estado desde localStorage:", err);
  }
  return undefined;  // Devuelve undefined si no hay datos en localStorage
};

// Función para guardar el estado en localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error("Error al guardar el estado en localStorage:", err);
  }
};

// Cargar el estado inicial desde localStorage
const persistedState = loadStateFromLocalStorage();

// Configurar el store con el estado persistido
const store = configureStore({
  reducer: {
    user: userReducer,
    turnos: turnoReducer,
  },
  preloadedState: persistedState, // Estado inicial persistido
});

// Escuchar los cambios en el estado y guardarlos en localStorage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
