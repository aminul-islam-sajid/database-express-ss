import express, { Request, Response } from "express";

import { userRoute } from "./modules/user/user.route";
import { initDb } from "./database/db";

const app = express();
app.use(express.json());
initDb()



app.use("/api/v1/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "this is the root route",
    path: req.path,
  });
});

app.listen(5000, () => {
  console.log("server is running in 5000");
});
