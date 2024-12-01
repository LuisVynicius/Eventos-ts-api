import { inject, injectable } from "tsyringe";
import { Request, Response, NextFunction } from 'express';
import { LoginUsuariosDTO } from "./LoginUsuariosDTO";
import UsuariosLoginService from "./UsuariosLoginService";


@injectable()
export default class UsuariosLoginController {

    private usuariosLoginService: UsuariosLoginService;

    constructor(
        @inject(UsuariosLoginService) usuariosLoginService: UsuariosLoginService
    ) {
        this.usuariosLoginService = usuariosLoginService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const login = request.body as LoginUsuariosDTO;

        const token = await this.usuariosLoginService.login(login);

        return response.status(200).json({
            token: "Bearer " + token
        });

    }
}