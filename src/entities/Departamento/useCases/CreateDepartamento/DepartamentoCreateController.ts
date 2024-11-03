import { inject, injectable } from "tsyringe";
import DepartamentoCreateService from "./DepartamentoService";
import { Request, Response, NextFunction } from 'express';
import { CreateDepartamentoDTO } from "./CreateDepartamentoDTO";

@injectable()
export default class DepartamentoController {

    private departamentoCreateService: DepartamentoCreateService;

    constructor(
        @inject(DepartamentoCreateService) departamentoCreateService: DepartamentoCreateService
    ) {
        this.departamentoCreateService = departamentoCreateService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const departamento = request.body as unknown as CreateDepartamentoDTO;

        await this.departamentoCreateService.create(departamento);

        return response.sendStatus(201);

    }
}