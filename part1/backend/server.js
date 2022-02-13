require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
const routes = require('./router/index')
const {engine}=require('express-handlebars');
const friendsController=require('./controllers/friendscontroller')
require('./models/friends_model')
const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.json());

const connectDB=require('./config/db');

connectDB();

const friendRouter = require("./router/friend_router");

app.use('/api/friend', friendRouter);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.engine('.hbs',engine({ extname: '.hbs', defaultLayout:'mainLayout',layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine','hbs')



app.listen(PORT, console.log(`Listening on port ${PORT}.`));