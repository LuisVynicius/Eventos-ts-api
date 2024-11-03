import { Eventos } from "@prisma/client";

export interface IEventosRepository {
    insert(eventos: Eventos): Promise<void>;
}