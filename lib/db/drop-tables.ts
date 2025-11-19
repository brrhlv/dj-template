import { config } from 'dotenv';
config({ path: '.env.local' });

import { createPool } from '@vercel/postgres';

async function dropTables() {
  const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('No database connection string found.');
  }

  const pool = createPool({ connectionString });

  console.log('Dropping all tables...');

  try {
    // Drop tables in reverse order (to handle foreign key constraints)
    await pool.query('DROP TABLE IF EXISTS media CASCADE');
    await pool.query('DROP TABLE IF EXISTS newsletter CASCADE');
    await pool.query('DROP TABLE IF EXISTS bookings CASCADE');
    await pool.query('DROP TABLE IF EXISTS tracks CASCADE');
    await pool.query('DROP TABLE IF EXISTS events CASCADE');
    await pool.query('DROP TABLE IF EXISTS __drizzle_migrations CASCADE');

    console.log('✅ All tables dropped successfully!');
  } catch (error) {
    console.error('❌ Failed to drop tables:', error);
    process.exit(1);
  }

  process.exit(0);
}

dropTables();
