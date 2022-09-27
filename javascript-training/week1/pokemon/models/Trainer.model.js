// A Pokemon Trainer has a name and a team of at most 6 Pokemon

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: [{
            // To get Pokemon data, a lookup is required
            type: mongoose.Types.ObjectId,
            ref: 'Pokemon' // Ref indicates to Mongoose that this ObjectId refers to this schema
        }],
        validate: [pokemonTeam => pokemonTeam.length <= 6 && pokemonTeam.length >= 1, 'Team size must be between 1 and 6 Pokemon']
    }
});

const Trainer = mongoose.model('Trainer', trainerSchema, 'Trainers');
module.exports = Trainer;

/**
 * {
 *  "name": "Sean",
 *  "team": ["6332fbe17edac365d45a660f"]
 * }
 */