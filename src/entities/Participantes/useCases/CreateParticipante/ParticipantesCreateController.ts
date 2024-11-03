import { inject, injectable } from "tsyringe";
import ParticipantesCreateService from "./ParticipantesCreateService";
import { Request, Response, NextFunction } from 'express';
import { CreateParticipantesDTO } from "./CreateParticipantesDTO";

@injectable()
export default class ParticipantesCreateController {

    private participantesCreateService: ParticipantesCreateService;

    constructor(
        @inject(ParticipantesCreateService) participantesCreateService: ParticipantesCreateService
    ) {
        this.participantesCreateService = participantesCreateService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const participante = request.body as unknown as CreateParticipantesDTO;

        await this.participantesCreateService.create(participante);

        return response.sendStatus(201);

    }
}