import "reflect-metadata";
import { Router } from "express";
import eventoRoute from "./eventoRoute";
import participanteRoute from "./participanteRoute";
import departamentoRoute from "./departamentoRoute";
import inscricoesRoute from "./inscricoesRoute";
import presencaRoute from "./presencaRoute";
import certificadosRoute from "./certificadosRoute";

const routes = Router();

routes.use("/evento", eventoRoute);
routes.use("/participante", participanteRoute);
routes.use("/departamento", departamentoRoute)
routes.use("/inscricoes", inscricoesRoute)
routes.use("/presenca", presencaRoute)
routes.use("/certificado/:ParticipanteId/:EventoId", certificadosRoute)

export default routes;