
exports.up = function (knex, Promise) {
    return knex.schema.createTable('permissions', table => {
        table.increments('id').primary()
        table.string('description').notNull().unique()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('permissions')
};