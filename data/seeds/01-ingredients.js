
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {ingredients_name: 'banana'},
        {ingredients_name: 'potato'},
        {ingredients_name: 'tomato'}
      ]);
    });
};
