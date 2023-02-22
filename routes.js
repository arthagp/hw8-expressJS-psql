const { response } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('./query.js');

router.get('/actor', (req ,res) => {
    pool.query('SELECT * FROM actor', (error, result) => {
        if(error){
            throw error
        }
        res.send(result.rows);
    })
})

router.get('/film', (req ,res) => {
    pool.query('SELECT * FROM film', (error, result) => {
        if(error){
            throw error
        }
        res.send(result.rows);
    })
})

router.get('/film/:id', (req ,res) => {
    pool.query(`SELECT * FROM film WHERE film_id = ${req.params.id}`, (error, result) => {
        if(error){
            throw error
        }
        res.send(result.rows);
    })
})

router.get('/category', (req ,res) => {
    pool.query('SELECT * FROM category', (error, result) => {
        if(error){
            throw error
        }
        res.send(result.rows);
    })
})

router.get('/category/:category', (req ,res) => {
    pool.query(`SELECT film.film_id, film.title, category.category_id, category.name
    FROM film_category JOIN film ON film.film_id = film_category.film_id
    JOIN category ON category.category_id = film_category.category_id
    WHERE category.category_id = ${req.params.category}`, (error, result) => {
        if(error){
            throw error
        }
        res.send(result.rows);
    })
})

module.exports = router