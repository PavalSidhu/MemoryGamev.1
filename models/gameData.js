let db = require('../util/database');

function addScore(data) {
    let sql = "Insert into games (name, score) values ('" + data.name + "','" + data.score + "')";
    db.execute(sql);
}

function getAllScores() {
    return db.execute('Select * from games Order By score Desc');
}

module.exports = {
    add: addScore,
    getall: getAllScores,
}