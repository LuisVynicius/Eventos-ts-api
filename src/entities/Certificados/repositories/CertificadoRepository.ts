import { inject, injectable } from "tsyringe";
import { ICertificadosRepository } from "./interfaces/ICertificadosRepository";
import InscricoesRepository from "../../Inscricoes/repositories/InscricoesRepository";
import prisma from "../../../database/prisma";
import { Certificados } from "@prisma/client";

@injectable()
export default class CertificadosRepository implements ICertificadosRepository {
  private inscricoesRepository: InscricoesRepository;

  constructor(
      @inject(InscricoesRepository) inscricoesRepository: InscricoesRepository
  ) {
      this.inscricoesRepository = inscricoesRepository;
  }

  public async get(eventoId: number, participanteId: number): Promise<Certificados | null>{
    const inscricao = await this.inscricoesRepository.getByEventoAndParticipanteId(eventoId, participanteId);

    const certificado = await this.getByInscricaoId(inscricao!.InscricaoId);

    return certificado;
  }

  public async getByInscricaoId(id: number) {
    return prisma.certificados.findUnique({
      where: {
        InscricaoId: id
      }
    });
  }

}