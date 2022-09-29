/**
 * Mongoose is a wrapper around the native MongoDB driver for Nodejs
 * It abstracts some of the lower level queries and adds some new functionality
 * 
 * Mongoose enforces a schema to MongoDB documents
 * MongoDB is schemaless, but Mongoose adds a schema to it
 * 
 * The reason we do this is simply to restrict what's allowed to be submitted
 */

// This file will be our data model for a Pokemon document

const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Schema is a class that we can create our DB schemas with

/**
 * What properties do our Pokemon have?
 * 
 * Pokedex Number
 * Pokedex Description
 * Pokemon Name
 * Types
 * isLegendary
 */
const pokemonSchema = new Schema({
    // Mongoose gives you a _id if you don't specify one
    // BUT you can always define your own if you have somethind else you'd want to use
    // _id: Number

    // Inside here, I will define my document schema
    name: String, // If I don't open the object syntax, the value is the type
    /**
     * Equivalent to above
     * name: {
     *  type: String
     * }
     */
    pokedex: {
        number: {
            type: Number,
            required: true
        },
        description: String
    },
    types: {
        // type indicates the type to store the data as
        type: [String],
        // validate allows us to write our own validation function
        validate: [pokemonTypes => pokemonTypes.length >= 1 && pokemonTypes.length <= 2, 'Pokemon must only have 1 or 2 types']

        // This only works for strings
        // min: [1, 'Pokemon must have at least 1 type'], // If an array of 0 is passed, this validator goes off
        // max: [2, 'Pokemon must only have a maximum of 2 types'] // The string is the error message
    },
    isLegendary: Boolean,
    imageUrl: String
});

// Now take the schema and transform into a model
//                              Name         Schema      What I actually want it called in MongoDB
const Pokemon = mongoose.model('Pokemon', pokemonSchema, 'Pokemon');

// This Pokemon model we will use to construct queries for this collection
module.exports = Pokemon;