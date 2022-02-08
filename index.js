const express = require('express')
const api = express()
const port =  process.env.PORT || 3000

const inscricao = require('./lib/inscricao')

const path = require('path')

// it works with express.js
api.set('view engine', 'ejs')
api.set('views', path.join(__dirname,'views'))

//here i connect folder css public
api.use(express.static(path.join(__dirname, 'public')))



api.get('/', (req, res) =>{
    res.render('main', {
      
    })
})

api.get('/inscricao', (req, res) => {
   
   const {nome, email, numero} = req.query
   if(nome && email && numero){
    const union = inscricao.inscricao(nome,email,numero)
      res.render('inscricao', {
        error:false,
        nome: inscricao.change(nome),
        email: inscricao.change(email),
        numero:inscricao.change(numero),
        union: inscricao.change(union) 
    })
} else{
   res.render('inscricao', {
    error:'Valores invalidos, por favor prencha os campos corretamente'
   })
}
})



api.listen(port, ()=> console.log('listing here now'))