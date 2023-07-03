let myFavorites = [];

function postFav(req, res) {
    const { id, status, name, species, origin, image, gender } = req.body;
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
    const favorites = myFavorites.filter(fav => fav.id === id);
    myFavorites = favorites;
    res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}