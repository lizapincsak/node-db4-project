
exports.up = function(knex) {
  return knex.schema
  .createTable("ingredients", tbl => {
      tbl.increments("ingredients_id")
      tbl.string("ingredients_name", 128).notNullable().unique()
      tbl.string("ingredients_unit", 50)
  })
  .createTable("recipes", tbl => {
      tbl.increments("recipe_id")
      tbl.string("recipe_name", 128).notNullable().unique()
      tbl.dateTime("created_at").notNullable()
  })
  .createTable("steps", tbl => {
      tbl.increments("steps_id")
      tbl.integer("step_number").notNullable()
      tbl.string("steps_instruction", 128).notNullable()
      tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
  })
  .createTable("make_recipe", tbl => {
      tbl.increments("make_recipe_id")
      tbl.float("quantity").notNullable()
      tbl.integer("steps_id")
        .unsigned()
        .notNullable()
        .references("steps_id")
        .inTable("steps")
        .onDelete("RESTRICT")
      tbl.integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("make_recipe")
  .dropTableIfExists("steps")
  .dropTableIfExists("recipes")
  .dropTableIfExists("ingredients")
};
