const express = require('express');
const route = express.Router();

const User = require("../models/User");

route.post('/register', async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const user = new User({
            username: username,
            email: email,
            password: password
        })

        const saveUser = await user.save()
        res.json(saveUser)
    } catch (err) {
        res.json(err)
    }
})

module.exports = route;
