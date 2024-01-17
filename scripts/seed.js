const { db } = require('@vercel/postgres');
const {
  todos
} = require('../app/lib/placeholder-data.js');

async function seedTodos(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        completed BOOLEAN DEFAULT FALSE,
        description VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "todos" table`);

    // Insert data into the "users" table
    const insertedTodos = await Promise.all(
      todos.map(async (todo) => {
        return client.sql`
        INSERT INTO todos (completed, description)
        VALUES (${todo.completed}, ${todo.description})
      `;
      }),
    );

    console.log(`Seeded ${insertedTodos.length} todos`);

    return {
      createTable,
      todos: insertedTodos,
    };
  } catch (error) {
    console.error('Error seeding todos:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedTodos(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
