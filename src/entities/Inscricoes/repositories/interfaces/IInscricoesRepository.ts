import { Inscricoes } from "@prisma/client";

export interface IInscricoesRepository {
    insert(inscricao: Inscricoes): Promise<void>;
}