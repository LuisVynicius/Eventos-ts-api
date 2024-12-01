import { injectable, inject } from 'tsyringe';
import argon2i from "argon2";
import UsuariosRepository from '../../repositories/UsuariosRepository';
import { LoginUsuariosDTO } from './LoginUsuariosDTO';
import jwtUtil from '../../../../utils/jwtUtil';

@injectable()  
export default class UsuariosLoginService {
    private usuariosRepository: UsuariosRepository;

    constructor(
        @inject(UsuariosRepository) usuariosRepository: UsuariosRepository
    ) {
        this.usuariosRepository = usuariosRepository;
    }

    public async login(login: LoginUsuariosDTO) {
        
        const usuario = await this.usuariosRepository.findByEmail(login.email);
        
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }
        
        if (await argon2i.verify(usuario.Senha, login.senha)) {
            return jwtUtil.getToken(usuario.Email);
        }

    }
}
