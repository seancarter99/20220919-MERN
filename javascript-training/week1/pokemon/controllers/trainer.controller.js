const Trainer = require('../models/Trainer.model.js');

// populate will automatically lookup the referred documents so long as there's a ref property
const findAllTrainers = async () => await Trainer.find().populate('team');

const createTrainer = async trainerToSave => {
    try {
        const trainer = new Trainer(trainerToSave);
        await trainer.save();
        return trainer;
    } catch (err) {
        throw { status: 500, msg: err.message };
    }
};

module.exports = { findAllTrainers, createTrainer };