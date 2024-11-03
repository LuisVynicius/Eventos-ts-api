import { container } from "tsyringe";
import ParticipantesCreateController from "./ParticipantesCreateController";
import ParticipantesCreateService from "./ParticipantesCreateService";

export default async function CreateParticipantes() {

    const createParticipantesController = container.resolve(ParticipantesCreateController);
    const createParticipantesService = container.resolve(ParticipantesCreateService);

    return { createParticipantesController, createParticipantesService };
}
