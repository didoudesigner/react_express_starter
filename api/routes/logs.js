// Import express
const express = require('express');

// Create Router
const router = express.Router();

/** 
 * All the GET routes
*/

// Get all logs
router.get('/', (req, res) => {

});

// Get specific log by its id
router.get('/:id', (req, res) => {

});

// Get logs related to a specific date
router.get('/date/:date', (req, res) => {

});

/**
 * All the POST routes
 */

 // Add new log
router.post('/', (req, res) => {

});

// Export router
module.exports = router;