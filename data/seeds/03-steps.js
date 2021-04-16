
exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {step_number: 1, steps_instruction: 'Mush', recipe_id: 1},
        {step_number: 2, steps_instruction: 'Wash', recipe_id: 2},
        {step_number: 3, steps_instruction: 'Cut', recipe_id: 3}
      ]);
    });
};
