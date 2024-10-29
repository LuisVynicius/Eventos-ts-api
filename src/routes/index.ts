import { Router } from "express";
import eventRoute from "./eventRoute";
import studentRoute from "./studentRoute";

const routes = Router();

routes.use("/event", eventRoute);
routes.use("/student", studentRoute);

export default routes;