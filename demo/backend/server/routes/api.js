const express = require('express');
const router = express.Router();

const path = require('path');
const book = require(path.join(__dirname, "./recipes.json"));


//get the book
router.get('/', (req, res, next) => {
  res.json(book);
});

module.exports = router;
