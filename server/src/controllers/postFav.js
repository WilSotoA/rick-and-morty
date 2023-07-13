const { Favorite } = require('../models/db');

async function postFav(req, res) {
    const { name, origin, status, image, species, gender } = req.body;
    if (!name || !origin || !status || !image || !species || !gender) {
        return res.status(401).send("Faltan datos");
    }
    try {
        await Favorite.findOrCreate({ where: { name, origin, status, image, species, gender } });
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = postFav;