import { inject, injectable } from "tsyringe";
import { Request, Response, NextFunction } from 'express';
import UsuariosCreateService from "./UsuariosCreateService";
import { CreateUsuariosDTO } from "./CreateUsuariosDTO";

@injectable()
export default class UsuariosCreateController {

    private usuariosCreateService: UsuariosCreateService;

    constructor(
        @inject(UsuariosCreateService) usuariosCreateService: UsuariosCreateService
    ) {
        this.usuariosCreateService = usuariosCreateService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const usuario = request.body as unknown as CreateUsuariosDTO;

        await this.usuariosCreateService.create(usuario);

        return response.sendStatus(201);

    }
}