
exports.up = function(knex) {
  return knex.schema
  .createTable("ingredients", tbl => {
      tbl.increments("ingredients_id")
      tbl.string("ingredients_name", 128).notNullable()
  })
  .createTable("recipes", tbl => {
      tbl.increments("recipes_id")
      tbl.string("recipes_name", 128).notNullable().unique()
      tbl.dateTime("created_at").notNullable()
  })
  .createTable("steps", tbl => {
      tbl.increments("steps_id")
      tbl.integer("step_number").notNullable()
      tbl.string("steps_instruction", 128).notNullable()
      tbl.integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("recipes_id")
        .inTable("recipes")
        .onDelete("CASCADE")
  })
  .createTable("make_recipe", tbl => {
      tbl.increments("make_recipe_id")
      tbl.decimal("quantity")
      tbl.integer("steps_id")
        .unsigned()
        .notNullable()
        .references("steps_id")
        .inTable("steps")
        .onDelete("CASCADE")
      tbl.integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("make_recipe")
  .dropTableIfExists("steps")
  .dropTableIfExists("recipes")
  .dropTableIfExists("ingredients")
};
