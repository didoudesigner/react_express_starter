// Import express
const express = require('express');

// Create Router
const router = express.Router();

/** 
 * All the GET routes
*/

// Get all uploads
router.get('/', (req, res) => {

});

// Get specific upload by its ID
router.get('/:id', (req, res) => {

});

/**
 * All the POST routes
 */

 // Add new upload (file)
router.post('/', (req, res) => {

});

/**
 * All the DELETE routes
 */

 // Delete an upload by its ID
router.delete('/:id', (req, res) => {

});


// Export router
module.exports = router;