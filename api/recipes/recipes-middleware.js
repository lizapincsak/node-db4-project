const express = require("express");
const Recipe = require('./recipes-model');

const getRecipeById = async(req, res, next) => {
    const {recipes_id} = req.params;
    try{
        const id = await Recipe.getRecipeById(recipes_id)
        if(!id){
            res.status(404).json({message: `recipe with recipes_id ${id} not found`})
        } else {
            req.recipes_id = id;
            next()
        }
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    getRecipeById
}