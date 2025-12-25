import { Request, Response } from "express";
import { authService } from "./auth.service";


const loginUser = async(req:Request, res:Response)=>{
try {
   const result = await authService.loginUser(req.body.email, req.body.password)
 return res.status(201).json({
    message: "user created successfully",
    data: result
  })
 } catch (error: any) {
 return res.status(500).json({
    message: error.message,
   
 })
}}



export const authController = {
    loginUser,
}