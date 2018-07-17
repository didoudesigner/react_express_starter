// Import express
const express = require('express');

// Create Router
const router = express.Router();

/** 
 * All the GET routes
*/

// Get all comments
router.get('/', (req, res) => {

});

// Get a comment by its ID
router.get('/:id', (req, res) => {

});

// Get all comments of a specific article
router.get('/article/:id', (req, res) => {

});

// Get specific comment by its email
router.get('/email/:email', (req, res) => {

});

/**
 * All the POST routes
 */

 // Add new comment
router.post('/', (req, res) => {

});

/**
 * All the DELETE routes
 */

 // Delete a comment by its Url ID
router.delete('/:id', (req, res) => {

});

// Delete all the comments of a specific article
router.delete('/article/:id', (req, res) => {
    
});


// Export router
module.exports = router;