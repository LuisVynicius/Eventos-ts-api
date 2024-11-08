import { inject, injectable } from "tsyringe";
import { Request, Response, NextFunction } from 'express';
import InscricoesPresenceService from "./InscricoesPresenceService";
import { PresenceInscricoesDTO } from "./PresenceInscricoesDTO";

@injectable()
export default class InscricoesPresenceController {

    private inscricoesPresenceService: InscricoesPresenceService;

    constructor(
        @inject(InscricoesPresenceService) inscricoesPresenceService: InscricoesPresenceService
    ) {
        this.inscricoesPresenceService = inscricoesPresenceService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const inscricao = request.body as unknown as PresenceInscricoesDTO;

        await this.inscricoesPresenceService.presence(inscricao);

        return response.sendStatus(200);

    }
}