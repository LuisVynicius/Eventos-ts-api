import { Router } from "express";
import { container } from "tsyringe";
import DepartamentoController from "../entities/Departamento/useCases/CreateDepartamento/DepartamentoCreateController";

const departamentoRoute = Router( { mergeParams: true } );

const departamentoCreateController: DepartamentoController = container.resolve(DepartamentoController);

departamentoRoute.post("/", (req, res, next) => {
    departamentoCreateController.handle(req, res, next);
});

export default departamentoRoute;