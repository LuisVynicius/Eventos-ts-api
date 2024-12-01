import { Participantes } from "@prisma/client";
import prisma from "../../../database/prisma";
import { injectable } from "tsyringe";
import { IParticipantesRepository } from "./interfaces/IParticipantesRepository";

@injectable()
export default class ParticipantesRepository implements IParticipantesRepository {

    public async insert(participantes: Participantes): Promise<void> {
        await prisma.participantes.create({
            data: participantes
        });
    }
    
}