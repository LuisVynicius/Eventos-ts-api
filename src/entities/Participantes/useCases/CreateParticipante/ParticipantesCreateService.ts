import { injectable, inject } from 'tsyringe';
import ParticipantesRepository from '../../repositories/ParticipantesRepository';

@injectable()  
export default class ParticipantesCreateService {
    private participantesRepository: ParticipantesRepository;

    constructor(
        @inject(ParticipantesRepository) participantesRepository: ParticipantesRepository
    ) {
        this.participantesRepository = participantesRepository;
    }

    public async create(participantes: any): Promise<void> {
        await this.participantesRepository.insert(participantes);
    }
}
