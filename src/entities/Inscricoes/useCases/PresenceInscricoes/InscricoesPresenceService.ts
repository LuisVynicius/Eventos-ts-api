import { injectable, inject } from 'tsyringe';
import InscricoesRepository from '../../repositories/InscricoesRepository';

@injectable()  
export default class InscricoesPresenceService {
    private inscricoesRepository: InscricoesRepository;

    constructor(
        @inject(InscricoesRepository) inscricoesRepository: InscricoesRepository
    ) {
        this.inscricoesRepository = inscricoesRepository;
    }

    public async presence(inscricao: any): Promise<void> {
        await this.inscricoesRepository.presence(inscricao);
    }
}
