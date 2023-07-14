const { Favorite } = require('../models/db');

async function postFav(req, res) {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (!id || !name || !image) {
        return res.status(401).json({ message: "Faltan datos" });
    }
    try {
        await Favorite.findOrCreate({
            where: { id },
            defaults: {
                name,
                origin: origin?.name,
                status,
                image,
                species,
                gender
            }
        }
        );
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postFav;