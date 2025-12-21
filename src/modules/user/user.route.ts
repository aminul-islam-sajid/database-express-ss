import { Request, Response, Router } from "express";
import { pool } from "../../database/db";


const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const result = await pool.query(
    `INSERT INTO users(name,email,password) VALUES ($1,$2,$3) RETURNING *`,
    [name, email, password]
  );
  res.status(201).json({
    message: "user created successfully",
    data: result.rows[0]
  })
})

export const userRoute = router