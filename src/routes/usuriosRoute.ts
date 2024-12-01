import { Router } from "express";
import { container } from "tsyringe";
import UsuariosCreateController from "../entities/Usuarios/useCases/CreateUsuarios/UsuariosCreateController";

const usuariosRoute = Router( { mergeParams: true } );

const usuariosCreateController: UsuariosCreateController = container.resolve(UsuariosCreateController);

usuariosRoute.post("/", (req, res, next) => {
    usuariosCreateController.handle(req, res, next);
});

export default usuariosRoute;