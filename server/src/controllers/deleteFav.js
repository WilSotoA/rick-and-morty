const { Favorite } = require('../models/db');

async function deleteFav(req, res) {
    const { id } = req.params;
    try {
        await Favorite.destroy({where: {id}});
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deleteFav;