import { container } from "tsyringe";
import InscricoesCreateController from "./InscricoesCreateController";
import InscricoesCreateService from "./InscricoesCreateService";

export default async function CreateParticipantes() {

    const createInscricoesController = container.resolve(InscricoesCreateController);
    const createInscricoesService = container.resolve(InscricoesCreateService);

    return { createInscricoesController, createInscricoesService };
}
