import { JWT_SECRET } from "@repo/backend-common/config";
import { NextFunction , Request, Response} from "express";
import jwt from "jsonwebtoken";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token as string, JWT_SECRET);
    if(decoded){
        //@ts-ignore
        req.userId = decoded.userId;
        next();
    }
    else{
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    next();
};
