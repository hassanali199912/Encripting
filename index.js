const express = require('express')
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 8080;

const app = express()

const publicPathDirectory = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './view')


app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.use(express.static(publicPathDirectory))
app.get('', (req, res) => {
    res.render('index', {
        title: 'Security Assignment'
    })
})

app.listen(port, () => {
    console.log('Server Is Running Up Port', port);
})