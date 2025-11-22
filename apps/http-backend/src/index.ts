import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import {CreateUserSchema , SignInSchema, CreateRoomSchema} from "@repo/common/types"
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/signup", (req, res) => {

    // db call

    res.json({ userId: "1" });
    

});


app.post("/signin", (req, res) => {

    const userId = 1;
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({ token });

});

app.post("room",middleware, (req,res)=>{
        
})