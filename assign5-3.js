const express = require('express');
const app = express();
const port = 8080;
const { runQuery } = require('./database');
app.get('/fare', (req, res) => {
    try {
        const { uid } = req.query;
        const { name, _sum } = (runQuery('select users.name,sum(round((trains.distance*types.fare_rate) / 1000, -2)) as _sum from tickets join users on tickets.user = users.id and users.id = ? join trains on tickets.train = trains.id ' +
            'join types on trains.type = types.id', [uid]))[0];
        return res.send(`Sum of ${name} : ${_sum}`);
    }
    catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});
app.get('/train/status', (req, res) => {
    try {
        const { tid } = req.query;
        //'select count(*) as cur, max_seats as lim from tickets join trains on trains.id = tickets.train and trains.id = ${tid} join types on trains.type = types.id'
        const { cur, lim } = (runQuery('select count(*) as cur, max_seats as lim from tickets join trains on trains.id = tickets.train and trains.id = ? join types on trains.type = types.id', [tid]))[0];
        if (cur < lim)
            return res.send(`Train ${tid} 자리 남음`);
        else
            return res.send(`Train ${tid} 매진됨`);
    }
    catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));