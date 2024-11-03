import { Router } from "express";
import ParticipantesController from "../entities/Participantes/useCases/CreateParticipante/ParticipantesCreateController";
import ParticipantesCreateController from "../entities/Participantes/useCases/CreateParticipante/ParticipantesCreateController";
import { container } from "tsyringe";

const participanteRoute = Router( { mergeParams: true } );

const participantesCreateController: ParticipantesController = container.resolve(ParticipantesCreateController);


participanteRoute.post("/", (req, res, next) => {
    participantesCreateController.handle(req, res, next);
});

export default participanteRoute;