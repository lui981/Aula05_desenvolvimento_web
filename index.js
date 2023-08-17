const express = require ('express')
const exphbs = require ('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res)=> {
    const alunos =  
    [
       {nome:"Luis", matricula: 1522},
       {nome:"Joao", matricula: 1526},
       {nome:"Maria", matricula: 1562}
    ]
    res.render('home', {alunos})
    

})
app.get('/', (req, res)=> {
    res.render('home')

})
app.get('/aluno', (req, res)=> {
    res.render('aluno')

})
app.listen(port)