import { inject, injectable } from "tsyringe";
import { Request, Response, NextFunction } from 'express';
import { LoginParticipanteDTO } from "./LoginParticipanteDTO";
import ParticipantesLoginService from "./ParticipantesLoginService";

@injectable()
export default class ParticipantesLoginController {

    private participantesLoginService: ParticipantesLoginService;

    constructor(
        @inject(ParticipantesLoginService) participantesLoginService: ParticipantesLoginService
    ) {
        this.participantesLoginService = participantesLoginService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const login = request.body as LoginParticipanteDTO;

        const token = await this.participantesLoginService.login(login);

        return response.send(200).json({
            token: token
        });

    }
}