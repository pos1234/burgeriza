const router = require('express').Router()
const Menu = require('../models/Menu')

router.post('/add/menu',(req,res)=>{
   
    const image ='/images/' + req.body.image
    const recipe = req.body.recipe
    const price = req.body.price
    const foodName = req.body.foodName
    const foodType = req.body.FoodType
    parseFloat(price)

    const newMenu = new Menu({image:image,recipe:recipe,price:price,title:foodName,foodType:foodType})
    newMenu.save()
    .then(()=>{
        res.redirect('/admin')
    })
    .catch((err)=>console.log(err))
})
router.get('/menu_links/pizza',async(req,res)=>{
    const allMenu = await Menu.find()
    res.render('index',{allMenu})
})

module.exports = router