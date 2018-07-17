// Import express
const express = require('express');

// Create Router
const router = express.Router();

/** 
 * All the GET routes
*/

// Get all menus
router.get('/', (req, res) => {

});

// Get specific menu by its title
router.get('/:title', (req, res) => {

});

/**
 * All the POST routes
 */

 // Add new menu
router.post('/', (req, res) => {

});


/**
 * All the PUT routes
 */

//update a menu by its title
router.put('/:title', (req, res) => {

});

/**
 * All the DELETE routes
 */

 // Delete menu by its ID
router.delete('/:title', (req, res) => {

});


// Export router
module.exports = router;