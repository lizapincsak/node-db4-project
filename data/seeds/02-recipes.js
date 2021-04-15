
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipes_name: 'Banana Bread', created_at: 1/2/13},
        {recipes_name: 'Dumplings', created_at: 4/5/21},
        {recipes_name: 'Lasagna', created_at: 8/3/21}
      ]);
    });
};
