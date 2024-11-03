import { Departamentos } from "@prisma/client";

export interface IDepartamentoRepository {
    insert(departamento: Departamentos): Promise<void>;
}