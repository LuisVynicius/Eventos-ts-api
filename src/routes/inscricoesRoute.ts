import { Router } from "express";
import { container } from "tsyringe";
import InscricoesCreateController from "../entities/Inscricoes/useCases/CreateInscricoes/InscricoesCreateController";

const inscricoesRoute = Router( { mergeParams: true } );

const inscricoesCreateController: InscricoesCreateController = container.resolve(InscricoesCreateController);

inscricoesRoute.post("/", (req, res, next) => {
    inscricoesCreateController.handle(req, res, next);
});

export default inscricoesRoute;