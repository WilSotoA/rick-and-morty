const credentials = require('../utils/users')
function login(req, res) {
    const { email, password } = req.query;
    const verified = credentials.find(cr => cr.email === email && cr.password === password)
    if (verified) res.status(200).json({ access: true});
    else res.status(200).json({ access: false});
}

module.exports = login;