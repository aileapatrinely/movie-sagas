const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ALL MOVIES
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
  pool.query(queryText);
});
//GET ONE MOVIE

//PUT FOR SINGLE MOVIE

module.exports = router;
