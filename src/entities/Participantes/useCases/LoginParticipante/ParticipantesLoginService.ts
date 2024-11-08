import { injectable, inject } from 'tsyringe';
import ParticipantesRepository from '../../repositories/ParticipantesRepository';
import { LoginParticipanteDTO } from './LoginParticipanteDTO';
import argon2i from "argon2";

@injectable()  
export default class ParticipanteLoginService {
    private participantesRepository: ParticipantesRepository;

    constructor(
        @inject(ParticipantesRepository) participantesRepository: ParticipantesRepository
    ) {
        this.participantesRepository = participantesRepository;
    }

    public async login(login: LoginParticipanteDTO) {
        
        const participante = await this.participantesRepository.findByEmail(login.Email);

        // To Do
        //
    }
}
