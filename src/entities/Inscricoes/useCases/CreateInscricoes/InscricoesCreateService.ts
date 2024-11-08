import { injectable, inject } from 'tsyringe';
import InscricoesRepository from '../../repositories/InscricoesRepository';

@injectable()  
export default class InscricoesCreateService {
    private inscricoesRepository: InscricoesRepository;

    constructor(
        @inject(InscricoesRepository) inscricoesRepository: InscricoesRepository
    ) {
        this.inscricoesRepository = inscricoesRepository;
    }

    public async create(inscricoes: any): Promise<void> {
        await this.inscricoesRepository.insert(inscricoes);
    }
}
