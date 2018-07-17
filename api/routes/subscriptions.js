// Import express
const express = require('express');

// Create Router
const router = express.Router();

/** 
 * All the GET routes
*/

// Get all subscriptions
router.get('/', (req, res) => {

});

// Get specific subscription by its ID
router.get('/:id', (req, res) => {

});

// Get specific subscription by its email
router.get('/email/:email', (req, res) => {

});

/**
 * All the POST routes
 */

 // Add new subscription
router.post('/', (req, res) => {

});

/**
 * All the DELETE routes
 */

 // Delete subscription by its ID
router.delete('/:id', (req, res) => {

});

// Delete subscription by its email
router.delete('/email/:email', (req, res) => {
    
});


// Export router
module.exports = router;