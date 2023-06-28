export default function validate(userData) {
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const RegExPasswordNum = /\d/;
    const error = {};
        if (!regExEmail.test(userData.email))  error.email = "El nombre de usuario tiene que ser un email"
        if (userData.email.length > 35)  error.email = "El nombre de usuario no puede tener más de 35 caracteres"
        if (!userData.email) error.email = "El nombre de usuario no puede estar vacío"
        if (!RegExPasswordNum.test(userData.password)) error.password = "La contraseña debe tener al menos un numero"
        if (userData.password.length < 6 || userData.password.length > 10)  error.password = "La contraseña debe tener entre 6 y 10 caracteres"

    return error;
}