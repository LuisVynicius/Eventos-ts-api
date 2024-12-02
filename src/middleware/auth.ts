import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const auth = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        response.status(403).send("Token é requerido.");
        return;
    }

    const [, token] = authHeader.split(" ");
    try {
        let payload = await jwt.verify(token, process.env.SECRET_KEY!) as unknown as {Email: string};
        next();
    } catch (error) {
        response.status(403).send("Token inválido.");
    }
};
