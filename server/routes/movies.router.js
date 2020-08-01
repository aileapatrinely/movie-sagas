const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ALL MOVIES
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('Error in ALL MOVIES get router', err);
      res.sendStatus(500);
    });
});
//GET ONE MOVIE
router.get('/:id', (req, res) => {
  const queryText = `SELECT * FROM "movies"
    WHERE "id"= $1;`;
  pool
    .query(quertyText, req.params.id)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('Error in ONE MOVIE get router', err);
      res.sendStatus(500);
    });
});

//PUT FOR SINGLE MOVIE
router.put('/:id', (req, res) => {
  const queryText = `UPDATE "movies" SET "`;
  pool.query(queryText, []);
});

module.exports = router;
