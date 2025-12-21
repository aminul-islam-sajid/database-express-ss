import { Request, Response } from "express";
import { userService } from "./user.service";


const createUser =  async (req: Request, res: Response) => {
 try {
   const result = await userService.userServiceDb(req.body)
 return res.status(201).json({
    message: "user created successfully",
    data: result.rows[0]
  })
 } catch (error: any) {
 return res.status(500).json({
    message: error.message,
   
 })
}}

export const userController = {
createUser,
}