import { Usuarios } from "@prisma/client";
import { CreateUsuariosDTO } from "../../useCases/CreateUsuarios/CreateUsuariosDTO";

export interface IUsuariosRepository {
    insert(usuario: CreateUsuariosDTO): Promise<void>;
    findByEmail(email: string): Promise<Usuarios | null>;
}