const express = require('express')
const router = express.Router
const Item = require('../models/item')

//GET ALL
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//GET ONE
router.get('/:id', (req, res) => {

})

// CREATE ONE
router.post('/', (req, res) => {

})

// UPDATE ONE
router.patch('/:id', (req, res) => {

})

// DELETE ONE
router.delete('/', (req, res) => {

})


module.exports = router