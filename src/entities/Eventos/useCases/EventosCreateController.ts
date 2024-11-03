import { inject, injectable } from "tsyringe";
import EventosCreateService from "./EventosCreateService";
import { Request, Response, NextFunction } from 'express';
import { CreateEventosDTO } from "./CreateEventosDTO";

@injectable()
export default class EventosCreateController {

    private eventosCreateService: EventosCreateService;

    constructor(
        @inject(EventosCreateService) eventosCreateService: EventosCreateService
    ) {
        this.eventosCreateService = eventosCreateService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const participante = request.body as unknown as CreateEventosDTO;

        await this.eventosCreateService.create(participante);

        return response.sendStatus(201);

    }
}