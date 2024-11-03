import "reflect-metadata";
import { Router } from "express";
import eventoRoute from "./eventoRoute";
import participanteRoute from "./participanteRoute";
import departamentoRoute from "./departamentoRoute";

const routes = Router();

routes.use("/evento", eventoRoute);
routes.use("/participante", participanteRoute);
routes.use("/departamento", departamentoRoute)

export default routes;