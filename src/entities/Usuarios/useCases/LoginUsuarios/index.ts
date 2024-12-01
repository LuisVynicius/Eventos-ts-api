import { container } from "tsyringe";
import ParticipantesLoginController from "./UsuariosLoginController";
import ParticipanteLoginService from "./UsuariosLoginService";

export default async function CreateParticipantes() {

    const loginParticipantesController = container.resolve(ParticipantesLoginController);
    const loginParticipantesService = container.resolve(ParticipanteLoginService);

    return { loginParticipantesController, loginParticipantesService };
}
