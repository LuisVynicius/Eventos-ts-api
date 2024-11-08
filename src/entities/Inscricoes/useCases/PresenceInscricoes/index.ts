import { container } from "tsyringe";
import InscricoesPresenceController from "./InscricoesPresenceController";
import InscricoesPresenceService from "./InscricoesPresenceService";

export default async function CreateParticipantes() {

    const presenceInscricoesController = container.resolve(InscricoesPresenceController);
    const presenceInscricoesService = container.resolve(InscricoesPresenceService);

    return { presenceInscricoesController, presenceInscricoesService };
}
