const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/menus',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
//midlewares
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
//routers
app.use(require('./routes/index'))
app.use(require('./routes/menu'))
app.use(require('./routes/admin'))


//connection to server
app.listen(3000)