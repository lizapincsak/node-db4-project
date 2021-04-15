const db = require('../../data/db-config.js')


function getRecipe(){
    return db("recipes as r")
    .select("r.*", "steps_instruction")
    .leftJoin("steps as st", {"r.recipes_id": "st.recipes_id"})
    .groupBy("r.recipes_id")
    .orderBy("r.recipes_id", "asc")
}
 
async function getRecipeById(recipes_id){
    const recipe = await db ("recipes as r")
    .select("r.*")
    .where("r.recipes_id", recipes_id)
    .leftJoin("steps as st", {"r.recipes_id": "st.recipes_id"})
    .groupBy("r.recipes_id")
    .orderBy("r.recipes_id", 'asc')
    .first()
    if(recipe){
        const steps = await db("recipes as r")
        .select("r.recipes_name", "st.*")
        .leftJoin("steps as st", {"r.recipes_id": "st.recipes_id"})
        .where("r.recipes_id", recipes_id)
        .orderBy("st.step_number", 'asc')
        if(steps[0].steps_id === null || !steps){
            recipe.steps = [];
        } else {
            recipe.steps = steps
        }
    } return recipe;
}

module.exports = {
    getRecipe, getRecipeById
}