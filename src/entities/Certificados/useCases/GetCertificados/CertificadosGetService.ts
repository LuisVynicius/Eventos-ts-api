import { injectable, inject } from 'tsyringe';
import CertificadosRepository from '../../repositories/CertificadoRepository';
import { GetCertificadosDTO } from './GetCertificadosDTO';
import { Certificados } from '@prisma/client';

@injectable()  
export default class CertificadosGetService {
    private certificadosRepository: CertificadosRepository;

    constructor(
        @inject(CertificadosRepository) certificadosRepository: CertificadosRepository
    ) {
        this.certificadosRepository = certificadosRepository;
    }

    public async get(getCertificadosDTO: GetCertificadosDTO): Promise<Certificados | null> {
        return await this.certificadosRepository.get(getCertificadosDTO.EventoId, getCertificadosDTO.ParticipanteId);
    }
}
