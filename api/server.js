const express = require("express");

const RecipeRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get("/", (req, res) => {
    res.status(200).json({api: "up"})
})

module.exports = server;
