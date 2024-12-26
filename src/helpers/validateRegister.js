export const validateRegister = (userData) => {
    const errors = {};

    if (!userData.name.trim()) {
        errors.name = "El nombre es requerido.";
    } else if (userData.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres.";
    }


    if (!userData.email.trim()) {
        errors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "El email no es válido.";
    }


    if (!userData.birthdate.trim()) {
        errors.birthdate = "La fecha de nacimiento es requerida.";
    } else {
        const today = new Date();
        const birthDate = new Date(userData.birthdate);
        if (birthDate >= today) {
            errors.birthdate = "La fecha de nacimiento no puede ser en el futuro.";
        }
    }


    if (!userData.nDni.trim()) {
        errors.nDni = "El número de DNI es requerido.";
    } else if (!/^\d{8,9}$/.test(userData.nDni)) {
        errors.nDni = "El número de DNI debe tener entre 8 y 9 dígitos.";
    }


    if (!userData.credential.username.trim()) {
        errors.username = "El nombre de usuario es requerido.";
    } else if (userData.credential.username.length < 3) {
        errors.username = "El nombre de usuario debe tener al menos 3 caracteres.";
    }

    
    if (!userData.credential.password.trim()) {
        errors.password = "La contraseña es requerida.";
    } else if (userData.credential.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    return errors;
};
