const db = require('../../data/db-config.js')
 
async function getRecipeById(recipe_id){
    const recipeRows = await db ("recipes as r")
        .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
        .leftJoin('make_recipe as m', 'm.steps_id', 's.steps_id')
        .leftJoin("ingredients as i", 'i.ingredients_id', 'm.ingredients_id')
        .select(
            'r.recipe_id', 
            'r.recipe_name ',
            's.steps_id',
            's.step_number',
            's.steps_instruction',
            'i.ingredients_id',
            'i.ingredients_name', 
            'm.quantity'
        )
        .orderBy("s.step_number")
        .where("r.recipe_id", recipe_id)

const recipes = {

            recipe_id: recipeRows[0].recipe_id,
            recipe_name: recipeRows[0].recipe_name,
            steps: recipeRows.reduce((acc, row) => {
                if(!row.ingredients_id){
                    return acc.concat({
                        steps_id: row.steps_id,
                        step_number: row.step_number,
                        steps_instruction: row.steps_instruction
                    })
                }
                if(row.ingredients_id && !acc.find(step => step.steps_id === row.steps_id)){
                    return acc.concat({
                        steps_id: row.steps_id,
                        step_number: row.step_number,
                        steps_instruction: row.steps_instruction,
                        ingredients: [
                            {
                                ingredients_id: row.ingredients_id,
                                ingredients_name: row.ingredients_name,
                                quantity: row.quantity
                            }
                        ]
                    })
                }
                const currentStep = acc.find(step => step.steps_id === row.steps_id)
                currentStep.ingredients.push({
                    ingredients_id: row.ingredients_id,
                    ingredients_name: row.ingredients_name,
                    quantity: row.quantity
                })
                return acc
            }, [])
        }
    return recipes
    
}

module.exports = {
 getRecipeById
}


    