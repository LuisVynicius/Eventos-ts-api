import { Router } from "express";

const eventRoute = Router( { mergeParams: true } );

eventRoute.get("/", (req, res, next) => {
    res.status(200).send({
        message: "event is ok"
    });
});

export default eventRoute;