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

const createPokemon = async pokemonToSave => {
    try {
        // We'll use the model and create a new instance of it
        // This alone does not save the entity
        const pokemon = new Pokemon(pokemonToSave); // This runs all of my validation logic
        // pokemon.name = 'Fred'; // This change would be saved
        await pokemon.save(); // Take the instance and save it
        return pokemon;
    } catch (err) {
        throw err;
    }
}

const updatePokemon = async (id, pokemonToUpdate) => {
    try {
        await Pokemon.findByIdAndUpdate(id, pokemonToUpdate);
    } catch (err) {
        throw { status: 400, msg: err };
    }
};

const deletePokemonById = async id => await Pokemon.findByIdAndDelete(id);

module.exports = { findAllPokemon, findPokemonById, createPokemon, updatePokemon, deletePokemonById };