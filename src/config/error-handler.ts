import { CelebrateError, isCelebrateError } from "celebrate";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-errors";

function errorRequestHandler(error: Error | CelebrateError | ApiError, req: Request, res: Response, next: NextFunction) {
    if (isCelebrateError(error)) {
        return next(error)
    }

    if (error instanceof ApiError) {
        console.log(error);
        
        return res.status(error.status).send(error.message)
    }


    return res.send(error).status(500)
}


export default errorRequestHandler