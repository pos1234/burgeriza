const router = require('express').Router()
const Menu = require('../models/Menu')
router.get('/',async(req,res)=>{
    const allMenu = await Menu.find()

    res.render('index',{allMenu})
})

module.exports = router