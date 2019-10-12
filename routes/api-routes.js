const router = require('express').Router();
const passport = require('passport');
const Business = require('../db/business');
const Promotions = require('../db/promotions');

// Redirect Routes



// Business Routes

// List all businesses
router.get('/business', (req, res) => {
    Business.getAllBusiness().then(resp => {
        console.log('hello')
        res.json(resp)
    });
});

// Get List of All Cities
router.get('/cities', (req, res) => {
    Business.getAllCities().then(resp => {
        res.json(resp)
    })
})

// Add Business

router.post('/add', (req, res) => {
    Business.addBusiness(req.business, req, res);
})





// Promotion Routes

// Get Promotions in City

router.get('/promotion/all/:city', (req, res) => {
    Promotions.getPromotionsInCity(req.params.city, res)
});

// Add Promotion

// Delete Promotion

router.post('/promotion/delete/:id'), (req, res) => {
    Promotions.deletePromotion(req.params.id, res)
}

// Edit Promotion







// Home -> Landing Page
// Landing Page -> Login -> Dashboard
// Landing Page -> Apple Store
// Landing Page -> Play Store

module.exports = router;