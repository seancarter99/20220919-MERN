// /pokemon

/**
 * CRUD
 * C - Create (POST)
 * R - Read (GET)
 * U - Update (PUT/PATCH)
 * D - Delete (DELETE)
 */

const router = require('express').Router();
const { findAllPokemon, findPokemonById } = require('../controllers/pokemon.controller.js');
const mongoose = require('mongoose');

// GET ALL POKEMON
// /pokemon
router.get('/', async (req, res) => {
    const pokemon = await findAllPokemon();
    res.json(pokemon);
});

// GET POKEMON BY ID
router.get('/:id', async (req, res) => {
    // req.params.id extracts the id number from the URL
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            throw {status: 204, msg: 'No Pokemon found'}
        }
        const pokemon = await findPokemonById(req.params.id);
        res.json(pokemon);
    } catch (err) {
        // Rejected Promise AKA no Pokemon found
        console.log(err);
        res.status(err?.status).json(err);
    }
});

// CREATE A POKEMON

// UPDATE A POKEMON

// DELETE A POKEMON

module.exports = router;