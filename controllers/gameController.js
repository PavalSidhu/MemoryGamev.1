let gameData = require('../models/gameData');

exports.getAllGameData = (req, res) => {
    let data = gameData.getall();
    data.then(sqlData => {
        res.send(JSON.stringify(sqlData[0]));
    });
}

exports.addScore = (req, res) => {
    let nName = req.body.name;
    let nScore = req.body.score;

    let obj = {
        name: nName,
        score: nScore
    };

    gameData.add(obj);
    res.redirect(301, '/leaderboard');
}