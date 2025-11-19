import { config } from 'dotenv';
config({ path: '.env.local' });

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import { createPool } from '@vercel/postgres';

async function runMigrations() {
  // Use DATABASE_URL if POSTGRES_URL is not set (Vercel uses DATABASE_URL)
  const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('No database connection string found. Set POSTGRES_URL or DATABASE_URL environment variable.');
  }

  const pool = createPool({ connectionString });
  const db = drizzle(pool);

  console.log('Running migrations...');

  await migrate(db, { migrationsFolder: './drizzle' });

  console.log('Migrations completed!');
  process.exit(0);
}

runMigrations().catch((err) => {
  console.error('Migration failed!', err);
  process.exit(1);
});
