
exports.seed = function(knex) {
  return knex('make_recipe').del()
    .then(function () {
      return knex('make_recipe').insert([
        {quantity: 2, steps_id: 1, ingredients_id: 1},
        {quantity: 10, steps_id: 2, ingredients_id: 2},
        {quantity: 7, steps_id: 3, ingredients_id: 3}
      ]);
    });
};
