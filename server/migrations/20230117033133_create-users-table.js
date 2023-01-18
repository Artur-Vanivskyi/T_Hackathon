/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex){
    return knex.schema.createTable("user", table => {
       table.increments()
       table.string("username")
       table.string("password_digest")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex){
    return knex.schema.dropTableIfExists("user")
};