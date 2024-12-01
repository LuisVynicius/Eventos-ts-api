import { Router } from "express";
import { container } from "tsyringe";
import UsuariosLoginController from "../entities/Usuarios/useCases/LoginUsuarios/UsuariosLoginController";

const loginRoute = Router( { mergeParams: true } );

const usuariosLoginController: UsuariosLoginController = container.resolve(UsuariosLoginController);

loginRoute.post("/", (req, res, next) => {
    usuariosLoginController.handle(req, res, next);
});

export default loginRoute;