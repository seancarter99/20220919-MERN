/**
 * const express = require('express');
 * const router = express.Router();
 */

// Router functions mostly the same as my app object, but it's only for a subsection of the app
const router = require('express').Router();

// This is technically /condiments
router.get('/', (req, res) => {
    res.send('router')
});

module.exports = router;