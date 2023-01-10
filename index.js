const express = require('express'); 
const app = express(); 
const path = require('path'); 
const { v4: uuid} = require('uuid');

app.use(express.static(path.join(__dirname, '/public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));  

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

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
    res.render('home', { twits }); 
})


app.listen(3000, () => {
    console.log("listening on port 3000"); 
})