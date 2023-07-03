const { Router } = require('express');
const { getCharById, getAllCharacters } = require('../controllers/characters');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.get("/allcharacters", getAllCharacters);

router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;