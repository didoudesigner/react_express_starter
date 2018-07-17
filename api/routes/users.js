// Import express
const express = require('express');

// Create Router
const router = express.Router();

/** 
 * All the GET routes
*/

// Get all users
router.get('/', (req, res) => {

});

// Get specific user by his ID
router.get('/:id', (req, res) => {

});

// Get specific user by his email
router.get('/email/:email', (req, res) => {

});

/**
 * All the POST routes
 */

 // Add new user
router.post('/', (req, res) => {

});


/**
 * All the PUT routes
 */

 // Update a user by his ID
router.put('/:id', (req, res) => {

});

// Update a user by his email
router.put('/email/:email', (req, res) => {

});

/**
 * All the DELETE routes
 */

 // Delete user by his ID
router.delete('/:id', (req, res) => {

});

// Delete user by his email
router.delete('/email/:email', (req, res) => {
    
});


// Export router
module.exports = router;