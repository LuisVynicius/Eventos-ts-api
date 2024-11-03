import { container } from "tsyringe";
import ParticipantesLoginController from "./ParticipantesLoginController";
import ParticipanteLoginService from "./ParticipantesLoginService";

export default async function CreateParticipantes() {

    const loginParticipantesController = container.resolve(ParticipantesLoginController);
    const loginParticipantesService = container.resolve(ParticipanteLoginService);

    return { loginParticipantesController, loginParticipantesService };
}
