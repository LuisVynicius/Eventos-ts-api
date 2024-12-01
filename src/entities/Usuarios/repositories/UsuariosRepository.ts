import { Participantes, Usuarios } from "@prisma/client";
import prisma from "../../../database/prisma";
import { injectable } from "tsyringe";
import { IUsuariosRepository } from "./interfaces/IUsuariosRepository";
import { CreateUsuariosDTO } from "../useCases/CreateUsuarios/CreateUsuariosDTO";
import argon2i from "argon2";

@injectable()
export default class UsuariosRepository implements IUsuariosRepository {
    
    public async insert(usuario: CreateUsuariosDTO): Promise<void> {
        await prisma.usuarios.create({
            data: {
                Nome: usuario.nome,
                Email: usuario.email,
                Senha: await argon2i.hash(usuario.senha),
                TipoUsuario: usuario.tipoUsuario,
                Ativo: usuario.ativo,    
            }
        });
    }
    
    findByEmail(email: string): Promise<Usuarios | null> {
        return prisma.usuarios.findUnique({
            where: {
                Email: email
            }
        });
    }
}