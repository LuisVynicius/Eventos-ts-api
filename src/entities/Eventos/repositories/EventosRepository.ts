import { Eventos } from "@prisma/client";
import prisma from "../../../database/prisma";
import { injectable } from "tsyringe";
import { IEventosRepository } from "./interfaces/IEventosRepository";

@injectable()
export default class EventosRepository implements IEventosRepository {

    public async insert(eventos: Eventos): Promise<void> {
        await prisma.eventos.create({
            data: eventos
        });
    }
    
}