import { Certificados } from "@prisma/client";

export interface ICertificadosRepository {
    get(eventoId: number, participanteId: number): Promise<Certificados | null>;
}