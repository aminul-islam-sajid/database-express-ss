import express, { Request, Response } from "express";

import { userRoute } from "./modules/user/user.route";
import { initDb } from "./database/db";
import { authRoute } from "./auth/auth.route";

const app = express();
app.use(express.json());
initDb()



app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "this is the root route",
    path: req.path,
  });
});

app.listen(5000, () => {
  console.log("server is running in 5000");
});
