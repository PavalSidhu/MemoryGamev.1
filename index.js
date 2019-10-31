let PORT = process.env.PORT || 3000;
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
//let router = require('./routes/gameboard');

app.use(bodyParser.urlencoded({ extended: false })) // middleware

// parse application/json
app.use(bodyParser.json()) // middleware
app.use(express.static(path.join(__dirname,'public')));
// app.use(router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'memoryGame.html'));
});

app.get('/summary', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'summary.html'));
});

app.get('/leaderboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'leaderboard.html'));
});

app.listen(PORT, () => console.log('Server ready'));