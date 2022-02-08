const express = require('express')
const api = express()
const port =  process.env.PORT || 3000

const path = require('path')

// it works with express.js
api.set('view engine', 'ejs')
api.set('views', path.join(__dirname,'views'))

//here i connect folder css public
api.use(express.static(path.join(__dirname, 'public')))



api.get('/', (req, res) =>{
    res.send('starting serving')
})


api.listen(port, ()=> console.log('listing here now'))