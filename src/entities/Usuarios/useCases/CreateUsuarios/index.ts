import { container } from "tsyringe";
import InscricoesCreateController from "./UsuariosCreateController";
import InscricoesCreateService from "./UsuariosCreateService";

export default async function CreateParticipantes() {

    const createInscricoesController = container.resolve(InscricoesCreateController);
    const createInscricoesService = container.resolve(InscricoesCreateService);

    return { createInscricoesController, createInscricoesService };
}
