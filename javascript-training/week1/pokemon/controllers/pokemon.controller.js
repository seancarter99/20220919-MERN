// Make all queries in this file
const Pokemon = require('../models/Pokemon.model.js'); // Import the Pokemon model that we created

// Find all Pokemon
const findAllPokemon = async () => await Pokemon.find(); // This returns all Pokemon

const findPokemonById = async id => {
    try {
        // You might think not finding it returns a rejected Promise
        const pokemon = await Pokemon.findById(id);
        // If it doesn't find anything, it returns null
        if (pokemon == null) {
            throw {status: 204, msg: `No Pokemon with the id ${id} was found.`};
        }
        return pokemon; // This returns the pokemon if we found it
    } catch (err) {
        // Pokemon was not found
        throw err; // Rethrow to have a rejected promise
    }
};

module.exports = { findAllPokemon, findPokemonById };