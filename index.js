const express = require('express'); 
const app = express(); 
const path = require('path'); 
const { v4: uuid} = require('uuid');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, '/public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));  

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(methodOverride('_method'));


//Array to mock a DB
let twits = [
    {
        username: "Rick8102", 
        twit: "messi scored!!", 
        id: uuid()
    }, 
    {
        username: "Marie", 
        twit: "look at my cats, arent they cute?", 
        id: uuid()
    }, 
    {
        username: "PietroMax", 
        twit: "oh wow", 
        id: uuid()
    }, 
    {
        username: "Magneto", 
        twit: "I know crazy", 
        id: uuid()
    }
]; 

app.get('/', (req, res) => {
    res.redirect('/twits');  
})

app.get('/twits', (req, res) => {
    res.render('home', { twits }); 
})

app.get('/twits/new', (req, res) => {
    res.render('new'); 
})

app.post('/twits', (req, res) => {
    const newUsername = req.body.username; 
    const newTwit = req.body.twit; 
    twits.push({ username: newUsername, twit: newTwit, id: uuid() });  
    res.redirect('/twits'); 
})

app.get('twits/:id', (req, res) => {
    res.render('show'); 
})

app.listen(3000, () => {
    console.log("listening on port 3000"); 
})