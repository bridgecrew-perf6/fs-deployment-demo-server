var express = require('express')
app = express()

port = process.env.PORT || 5000

mongoose = require('mongoose')

Contact = require('./api/models/contactListModels.js')
User = require('./api/models/userModels.js')

bodyParser = require('body-parser')

mongoose.Promise = global.Promise

const url = 'mongodb+srv://wasawat:EsqdJrttuKTBiVKe@contact3132.xqtfe.mongodb.net/ContactList?retryWrites=true&w=majority'

mongoose.connect(url, function(error){
    if(error) throw error
    console.log('Successfully connected');
})

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/contactListRoutes.js')
routes(app)

var routesUser = require('./api/routes/userRoutes.js')
routesUser(app)

app.listen(port)

console.log('Contact List started on : '+ port)