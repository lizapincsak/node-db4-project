
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {ingredients_name: 'banana', ingredients_unit: 'pounds'},
        {ingredients_name: 'potato', ingredients_unit: 'ounces'},
        {ingredients_name: 'tomato', ingredients_unit: 'tablespoons'}
      ]);
    });
};
