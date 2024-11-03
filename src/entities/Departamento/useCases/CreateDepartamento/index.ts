import { container } from "tsyringe";
import DepartamentoController from "./DepartamentoCreateController";
import DepartamentoCreateService from "./DepartamentoService";

export default async function CreateDepartamento() {

    const createDepartamentoController = container.resolve(DepartamentoController);
    const createDepartamentoService = container.resolve(DepartamentoCreateService);

    return { createDepartamentoController, createDepartamentoService };
}
