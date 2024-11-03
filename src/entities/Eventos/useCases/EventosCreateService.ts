import { injectable, inject } from 'tsyringe';
import EventosRepository from '../repositories/EventosRepository';

@injectable()  
export default class EventosCreateService {
    private eventosRepository: EventosRepository;

    constructor(
        @inject(EventosRepository) eventosRepository: EventosRepository
    ) {
        this.eventosRepository = eventosRepository;
    }

    public async create(participantes: any): Promise<void> {
        await this.eventosRepository.insert(participantes);
    }
}
