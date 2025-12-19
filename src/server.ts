import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_sXIVRtT35HFZ@ep-blue-salad-a8y71sfu-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDb = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        password TEXT NOT NULL ,
        age INT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);
  console.log("database connected");
};
initDb();

app.post("/users", (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const result = pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2,$3) RETURNING *`,
    [name, email, password]
  );
  console.log("result");
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "this is the root route",
    path: req.path,
  });
});

app.listen(5000, () => {
  console.log("server is running in 5000");
});
