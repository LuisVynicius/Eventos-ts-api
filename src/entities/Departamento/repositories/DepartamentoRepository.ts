import { Departamentos } from "@prisma/client";
import { IDepartamentoRepository } from "./interfaces/IDepartamentoRepository";
import prisma from "../../../database/prisma";
import { injectable } from "tsyringe";

@injectable()
export default class DepartamentoRepository implements IDepartamentoRepository {

    public async insert(departamento: Departamentos): Promise<void> {
        await prisma.departamentos.create({
            data: departamento
        });
    }
    
}