const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";

async function getCharById(req, res) {
    const { id } = req.params;
    try {
        const { data } = await axios.get(`${URL}/${id}`)
        if (data.name) {
            res.status(200).json({
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                gender: data.gender
            })
        } else {
            res.status(404).end("Not Found")
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getAllCharacters = async function (req, res) {
    try {
        const { data } = await axios.get(`${URL}?page=1`);
        const characters = data?.results;
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

module.exports = {
    getCharById,
    getAllCharacters
};

