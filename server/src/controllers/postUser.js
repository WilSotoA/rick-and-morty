const { User } = require('../models/db')
async function postUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("Faltan datos");
    }
    try {
        const user = await User.findOrCreate({ where: { email, password } });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = postUser;
