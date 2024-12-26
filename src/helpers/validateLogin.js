export const validateLogin = (userData) => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    if (!userData.username.trim()) {
        errors.username = "El nombre de usuario es requerido.";
    } else if (userData.username.length < 3) {
        errors.username = "El nombre de usuario debe tener al menos 3 caracteres.";
    } else if (!usernameRegex.test(userData.username)) {
        errors.username = "Ingresa un nombre de usuario válido";
    }


    if (!userData.password.trim()) {
        errors.password = "La contraseña es requerida.";
    } else if (userData.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    return errors;
};
