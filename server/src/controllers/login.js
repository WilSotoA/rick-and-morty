const { User } = require('../models/db');

async function login(req, res) {
    const { email, password } = req.query;
    if (!email || !password) {
        return res.status(400).send("Faltan datos");
    }
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }
        user.password = password 
        ? res.status(200).json({ access: true})
        : res.status(403).send("Contraseña incorrecta");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = login;