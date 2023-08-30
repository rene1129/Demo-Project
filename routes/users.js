const express = require('express')
const User = require('../models/userModel')
const router = express.Router()

//all heroes
router.get('/', async (req, res) => {
   res.render('/')
})

//new hero route
router.get('/new', (req, res) => {
    res.render('users/new')
})


//create hero route
router.post('/', async(req, res) => {
    const { name, secretIdentity, age, strenghtLevel } = req.body;
try {
    const newUser = User.create({
       name,
       secretIdentity,
       age,
       strenghtLevel
    });
    res.redirect('/')
    res.status(200).send(JSON.stringify(newUser));
} catch (error) {
    res.status(400).send('an error occurred');
}
})


module.exports = router