const express= require('express');
const app = express();

const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const dotenv= require('dotenv');
const ejs= require('ejs');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
dotenv.config();

const PORT = process.env.PORT 
const DB_URL = process.env.DB_URL

app.get('/', (req, res)=>{
    res.send('home');
})

app.get('/health', (req, res)=>{
    res.send({'health':'server is up'});
}
)

app.listen(PORT,()=>{
    mongoose.connect(DB_URL)
    .then(console.log('connected to db\nserver listening on http://localhost:'+PORT))
    .catch((err)=>console.log(err))
})