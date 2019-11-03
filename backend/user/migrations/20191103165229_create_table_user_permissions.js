
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_permissions', table => {
        table.primary(['userId', 'permissionId']);
        table.integer('userId').references('id').inTable('users').notNull()
        table.integer('permissionId').references('id').inTable('permissions').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_permissions')
};
