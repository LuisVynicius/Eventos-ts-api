import { Participantes } from "@prisma/client";

export interface IParticipantesRepository {
    insert(participantes: Participantes): Promise<void>;
}