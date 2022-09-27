const router = require('express').Router();
const { findAllTrainers, createTrainer } = require('../controllers/trainer.controller.js');

// Find all Trainers
router.get('/', async (req, res) => {
    try {
        const trainers = await findAllTrainers();
        res.status(200).json(trainers);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const trainer = await createTrainer(req.body);
        res.status(201).json(trainer);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

module.exports = router;