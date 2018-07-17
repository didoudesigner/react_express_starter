// Import express
const express = require('express');

// Create Router
const router = express.Router();

// Get Models 'SCHEMAS'
const Article = require('../models/Article');


// Handle ERRORS function
let handleErrors = (res, msg) => {
        return res.status(500).json({
            error: msg
        })
}


/** 
 * All the GET routes
*/

// Get all articles
router.get('/', (req, res) => {

    // Find all the results
    Article.find({}, (err, articles) => {
        if (err) {
            handleErrors(res, 'Something went wrong');
        }else {
            res.status(200).json(articles);
        }
    })

});

// Get specific article by the URL ID
router.get('/:urlId', (req, res) => {

    // Model.query where urlId equals the given url id then find Only One
    Article.where({urlId : req.params.urlId}).findOne((err, article) => {
        if (err) {
            // Handle Errors
            return handleErrors(res, 'Something went wrong');
        }else {

            // If there is no article
            if (!article) return handleErrors(res, 'there is no Article');
            
            res.status(200).json(article);
            
        }
    });

});

// Get specific article by its ID
router.get('/id/:id', (req, res) => {

    Article.findById(req.params.id, (err, article) => {
        // Handle Errors
        if (err) {
            return handleErrors(res, 'Something went wrong');
        }
        // if article is null (it means no article with the given id)
        if (!article) return handleErrors(res, 'there is no Article');

        res.status(200).json(article);

    });

});

// Get specific article by author ID
router.get('/author/:authorid', (req, res) => {

     // Model.query where urlId equals the given url id then find Only One
     Article.where({author : req.params.authorid}).findOne((err, article) => {
        if (err) {
            // Handle Errors
            return handleErrors(res, 'Something went wrong');
        }else {

            // If there is no article
            if (!article) return handleErrors(res, 'there is no Article');
            
            res.status(200).json(article);
            
        }
    });

});

/**
 * All the POST routes
 */

 // Add new article
router.post('/', (req, res) => {
    try {
    const article = new Article({
        title: req.body.title,
        urlId: req.body.urlId,
        imageLink: req.body.imageLink,
        author: req.body.author,
        content: req.body.content,
        tags: req.body.tags ? req.body.tags : null,
        minOfReading: req.body.minOfReading,
        shares: 0,
        views: 0
    });

    article.save();

    return res.status(200).json({
        message: 'Article inserted successfully'
    });
    }catch (err) {
        return handleErrors(res, 'Something went wrong');
    }
});

// Add an array of articles
router.post('/addarticles', (req, res) => {
    if (req.body.articles){
        req.body.articles.map((article) => {
            const newArticle = new Article({
                title: article.title,
                urlId: article.urlId,
                imageLink: article.imageLink,
                author: article.author,
                content: article.content,
                tags: article.tags ? article.tags : null,
                minOfReading: article.minOfReading,
                shares: 0,
                views: 0
            });
        
            newArticle.save();
        });
        return res.status(200).json({
            message : 'articles inserted successfully'
        })
    }else {
        return handleErrors(res, 'Something went wrong');
    }
    
});

/**
 * All the PUT routes
 */

 // Update an article by its url ID 
/**
 * !NOTE: You need to add all the fields mentioned below in order to update
 *        the article ORR !!! It will be null. and then your article is ruined xD
 */
router.put('/:urlId', (req, res) => {

    Article.findOneAndUpdate({urlId: req.params.urlId},{$set: {
            title : req.body.title,
            urlId : req.body.urlId,
            imageLink : req.body.imageLink,
            title : req.body.content,
            tags : req.body.tags,
            minOfReading : req.body.minOfReading,
            shares : req.body.shares,
            views : req.body.views,
            lastModificationDate: req.body.lastModificationDate
    }} ,(err, article) => {
       if (err) {
           // Handle ERRORS
           return handleErrors(res, 'Something went wrong');
       }
       if (!article) {
           // If there's no article
           return handleErrors(res, 'Can\'t update article');
       }

       return res.status(200).json({
            message: 'Article updated successfully'
       });
    });


});

// Update an article by its id
router.put('/id/:id', (req, res) => {

        Article.findByIdAndUpdate(req.params.id,{$set: {
                title : req.body.title,
                urlId : req.body.urlId,
                imageLink : req.body.imageLink,
                title : req.body.content,
                tags : req.body.tags,
                minOfReading : req.body.minOfReading,
                shares : req.body.shares,
                views : req.body.views,
                lastModificationDate: req.body.lastModificationDate
        }} ,(err, article) => {
        if (err) {
            // Handle ERRORS
            return handleErrors(res, 'Something went wrong');
        }
        if (!article) {
            // If there's no article
            return handleErrors(res, 'Can\'t update article');
        }

        return res.status(200).json({
                message: 'Article updated successfully'
        });
        });

});

/**
 * All the DELETE routes
 */

 // Delete article by its Url ID
router.delete('/:urlId', (req, res) => {

    Article.remove({urlId: req.params.urlId}, (err, data) => {
        if (err){
            return handleErrors(res, 'Something went wrong');
        }
        if (!data){
            return handleErrors(res, 'There\'s no article');
        }else {
            return res.status(200).json({
                message: 'article deleted successfully'
            });
        }
    });

});

// Delere article by its ID
router.delete('/id/:id', (req, res) => {
    Article.remove({_id: req.params.id}, (err, data) => {
        console.log(data);
        if (err){
            return handleErrors(res, 'Something went wrong');
        }
        if (data.n == 0){
            return handleErrors(res, 'There\'s no article');
        }else {
            return res.status(200).json({
                message: 'article deleted successfully'
            });
        }
    });
});


// Export router
module.exports = router;