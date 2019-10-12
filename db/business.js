const knex = require('./knex/knex'); 
const __ = require('lodash'); 
const dotenv = require('dotenv');
dotenv.config();

//node geocoder package to convert address to lat/long
const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GOOGLE_API_KEY,
  formatter: null
};
const geocoder = NodeGeocoder(options);

// Business Model
const Business = {
    // Gets all Businesses
    getAllBusiness: () => {
        return knex('business').select()
    }, 
    
    // Adds a Business
    addBusiness: (obj, req, cb) => {
        knex('business')
            .insert({
                name: obj.name, 
                address1: obj.address1, 
                city: obj.city, 
                state: obj.state, 
                zip: obj.zip, 
                latitude: obj.latitude, 
                longitude: obj.longitude,
                abclicense: obj.abc, 
                user_id: req.user.id
            })
            .then((result) => {
                cb.send(result); 
            })
            .catch(err => console.log(err)); 
    },

    // Get List of All Cities
    getDistinctCities: () => {
        return knex('business').distinct('city')
    }
}; 


module.exports = Business; 