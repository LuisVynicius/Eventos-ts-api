import { inject, injectable } from "tsyringe";
import { Request, Response, NextFunction } from 'express';
import InscricoesCreateService from "./InscricoesCreateService";
import { CreateInscricoesDTO } from "./CreateInscricoesDTO";

@injectable()
export default class InscricoesCreateController {

    private inscricoesCreateService: InscricoesCreateService;

    constructor(
        @inject(InscricoesCreateService) inscricoesCreateService: InscricoesCreateService
    ) {
        this.inscricoesCreateService = inscricoesCreateService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const inscricoes = request.body as unknown as CreateInscricoesDTO;

        await this.inscricoesCreateService.create(inscricoes);

        return response.sendStatus(201);

    }
}