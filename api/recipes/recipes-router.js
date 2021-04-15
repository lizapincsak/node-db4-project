const Recipe = require("./recipes-model.js");
const { getRecipeById } = require("./recipes-middleware")
const router = require("express").Router();

router.get("/", (req, res, next) => {
    Recipe.getRecipe()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(next)
})

router.get("/:id", getRecipeById, (req, res, next) => {
    const { recipes_id } = req.params
    Recipe.getRecipeById(recipes_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})


module.exports = router;