import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { env } from '../env.ts'
import { schema } from './schema/index.ts'

export const sql = postgres(env.DATABASE_URL)
export const db = drizzle(sql, {
    schema,
    casing: 'snake_case',
})
const result = await sql`select 'Hello' as message`

console.log(result)
