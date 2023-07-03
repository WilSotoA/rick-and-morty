let myFavorites = [];

function postFav(req, res) {
    const { id, status, name, species, origin, image, gender } = req.body;
    if (!id || !image || !name) return res.status(404).json({ error: 'Not Found' });
    myFavorites.push({
        id,
        status,
        name,
        species,
        origin,
        image,
        gender
    });
    res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: 'Invalid ID'});
    const favorites = myFavorites.filter(fav => fav.id !== parseInt(id));
    myFavorites = favorites;
    res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}