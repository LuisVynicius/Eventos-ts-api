import { injectable, inject } from 'tsyringe';
import UsuariosRepository from '../../repositories/UsuariosRepository';
import { CreateUsuariosDTO } from './CreateUsuariosDTO';

@injectable()  
export default class UsuariosCreateService {
    private usuariosRepository: UsuariosRepository;

    constructor(
        @inject(UsuariosRepository) usuariosRepository: UsuariosRepository
    ) {
        this.usuariosRepository = usuariosRepository;
    }

    public async create(usuario: CreateUsuariosDTO): Promise<void> {
        await this.usuariosRepository.insert(usuario);
    }
}
