import { Eventos, Inscricoes } from "@prisma/client";
import prisma from "../../../database/prisma";
import { injectable } from "tsyringe";
import { CreateInscricoesDTO } from "../useCases/CreateInscricoes/CreateInscricoesDTO";
import { PresenceInscricoesDTO } from "../useCases/PresenceInscricoes/PresenceInscricoesDTO";

@injectable()
export default class InscricoesRepository implements InscricoesRepository {

    public async insert(inscricoes: CreateInscricoesDTO): Promise<void> {
        await prisma.inscricoes.create({
            data: {
              EventoId: inscricoes.EventoId,
              ParticipanteId: inscricoes.ParticipanteId,
              DataInscricao: inscricoes.DataInscricao,
              Compareceu: inscricoes.Compareceu
            }
        });  
    }

    public async presence(inscricao: PresenceInscricoesDTO): Promise<void> {
      await prisma.inscricoes.updateMany({
        data: {
          Compareceu: true
        },
        where: {
          EventoId: inscricao.EventoId,
          ParticipanteId: inscricao.ParticipanteId
        }
      });
    }
    
}