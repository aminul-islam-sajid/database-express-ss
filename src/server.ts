import express, { Request, Response } from "express"

const app = express()
app.use(express.json())

app.post("/users", (req: Request, res: Response)=>{
    const body = req.body
    console.log(body);
})

app.get('/', (req: Request, res: Response)=>{
    res.status(200).json({
        message: "this is the root route",
        path: req.path
    })
})

app.listen(5000,()=>{
    console.log("server is running in 5000");
})

