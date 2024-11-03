import { injectable, inject } from 'tsyringe';
import DepartamentoRepository from '../../repositories/DepartamentoRepository';

@injectable()  
export default class DepartamentoCreateService {
    private departamentoRepository: DepartamentoRepository;

    constructor(
        @inject(DepartamentoRepository) departamentoRepository: DepartamentoRepository
    ) {
        this.departamentoRepository = departamentoRepository;
    }

    public async create(departamento: any): Promise<void> {
        await this.departamentoRepository.insert(departamento);
    }
}
