import { Router } from "express";

const studentRoute = Router( { mergeParams: true } );

studentRoute.get("/", (req, res, next) => {
    res.status(200).send({
        message: "student is ok"
    });
});

export default studentRoute;