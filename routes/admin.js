const router = require('express').Router()
const Menu = require('../models/Menu')
router.get('/admin',async(req,res)=>{
    const allMenu = await Menu.find()
    res.render('admin',{allMenu})
})
.get('/admin/delete/:_id',(req,res)=>{
    const {_id} = req.params
    Menu.deleteOne({_id})
    .then(()=>{
        res.redirect('/admin')
    })
})
module.exports = router