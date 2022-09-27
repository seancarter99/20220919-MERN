// /pokemon

/**
 * CRUD
 * C - Create (POST)
 * R - Read (GET)
 * U - Update (PUT/PATCH)
 * D - Delete (DELETE)
 */

const router = require('express').Router();
const { findAllPokemon, findPokemonById, createPokemon, updatePokemon, deletePokemonById } = require('../controllers/pokemon.controller.js');
const mongoose = require('mongoose');

// Validate ObjectId middleware
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send(); // Send back the response early
    } else {
        next(); // This calls the standard route for GET/POST/PUT/DELETE with (req, res)
    }
}

// GET ALL POKEMON
// /pokemon
router.get('/', async (req, res) => {
    const pokemon = await findAllPokemon();
    res.json(pokemon);
});

// GET POKEMON BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    // req.params.id extracts the id number from the URL
    try {
        const pokemon = await findPokemonById(req.params.id);
        res.json(pokemon);
    } catch (err) {
        // Rejected Promise AKA no Pokemon found
        console.log(err);
        res.status(err?.status ?? 500).json(err);
    }
});

// POST http://localhost:9000/pokemon
// CREATE A POKEMON
router.post('/', async (req, res) => {
    try {
        // For POST requests, we send the data through the request body
        const pokemon = await createPokemon(req.body);
        res.status(201).json(pokemon);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

// UPDATE A POKEMON
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        // For PUT requests, the data to update comes through the request body as well
        await updatePokemon(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

// DELETE A POKEMON
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deletePokemonById(req.params.id);
        res.send(); // 200 OK is good
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});


module.exports = router;