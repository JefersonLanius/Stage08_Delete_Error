exports.up = (knex) =>
  knex.schema.createTable("links", (table) => {
    table.increments("id");
    table.text("url").notNullable();

    table
      .integer("note_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamp("creat_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("links");
