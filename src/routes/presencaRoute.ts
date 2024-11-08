import { Router } from "express";
import { container } from "tsyringe";
import InscricoesPresenceController from "../entities/Inscricoes/useCases/PresenceInscricoes/InscricoesPresenceController";

const presencaRoute = Router( { mergeParams: true } );

const inscricoesPresenceController: InscricoesPresenceController = container.resolve(InscricoesPresenceController);

presencaRoute.post("/", (req, res, next) => {
    inscricoesPresenceController.handle(req, res, next);
});

export default presencaRoute;