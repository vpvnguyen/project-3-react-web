// Variables
const knex = require('./knex/knex'); 
const __ = require('lodash'); 

// Promotions Model
const Promotions = {
    // Gets all promotions within a city
    getPromotionsInCity: (city, cb) => {
        //knex join on promotion where city = the city 
        knex('promotion').leftJoin('business', 'promotion.business_id', 'business.id')
            .where('city', city)
            .then(result => {
                console.log(result);
                //map through result to make array of objects for markers 
                let promotions = result.map(item => {
                    return {
                        promotion: [`${item.promotion_name}`, `${item.qtypeople}`, `${item.description}`],
                        name: item.business_name,
                        address: `${item.address1} ${item.address2} ${item.city} ${item.state}, ${item.zip}`,
                        latitude: item.latitude,
                        longitude: item.longitude
                    }
                })
                console.log(promotions); 
                cb.json(promotions); 
            })
            .catch(err => console.log(err)); 
    },

    // Add a Promotion
    addPromotion: () => {

    },

    //Delete Promotion
    deletePromotion: (id, cb) => {
        knex('promotion')
        .where('id', id)
        .update({
            isActive: 'false'
        })
        .catch(err => console.log(err)); 
    },

    editPromotion: () => {

    }








}