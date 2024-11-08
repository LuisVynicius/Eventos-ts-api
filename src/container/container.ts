import "reflect-metadata"; 
import { container } from "tsyringe";
import DepartamentoRepository from "../entities/Departamento/repositories/DepartamentoRepository";
import DepartamentoController from "../entities/Departamento/useCases/CreateDepartamento/DepartamentoCreateController";
import { IDepartamentoRepository } from "../entities/Departamento/repositories/interfaces/IDepartamentoRepository";
import DepartamentoCreateService from "../entities/Departamento/useCases/CreateDepartamento/DepartamentoService";
import { IParticipantesRepository } from "../entities/Participantes/repositories/interfaces/IParticipantesRepository";
import ParticipantesRepository from "../entities/Participantes/repositories/ParticipantesRepository";
import ParticipantesCreateService from "../entities/Participantes/useCases/CreateParticipante/ParticipantesCreateService";
import ParticipantesCreateController from "../entities/Participantes/useCases/CreateParticipante/ParticipantesCreateController";
import { IEventosRepository } from "../entities/Eventos/repositories/interfaces/IEventosRepository";
import EventosRepository from "../entities/Eventos/repositories/EventosRepository";
import EventosCreateService from "../entities/Eventos/useCases/CreateEventos/EventosCreateService";
import EventosCreateController from "../entities/Eventos/useCases/CreateEventos/EventosCreateController";
import { IInscricoesRepository } from "../entities/Inscricoes/repositories/interfaces/IInscricoesRepository";
import InscricoesRepository from "../entities/Inscricoes/repositories/InscricoesRepository";
import InscricoesCreateService from "../entities/Inscricoes/useCases/CreateInscricoes/InscricoesCreateService";
import InscricoesCreateController from "../entities/Inscricoes/useCases/CreateInscricoes/InscricoesCreateController";
import InscricoesPresenceService from "../entities/Inscricoes/useCases/PresenceInscricoes/InscricoesPresenceService";
import InscricoesPresenceController from "../entities/Inscricoes/useCases/PresenceInscricoes/InscricoesPresenceController";

container.registerSingleton<IDepartamentoRepository>("DepartamentoRepository", DepartamentoRepository);
container.registerSingleton(DepartamentoCreateService);
container.registerSingleton(DepartamentoController);

container.registerSingleton<IParticipantesRepository>("ParticipantesRepository", ParticipantesRepository);
container.registerSingleton(ParticipantesCreateService);
container.registerSingleton(ParticipantesCreateController);

container.registerSingleton<IEventosRepository>("EventosRepository", EventosRepository);
container.registerSingleton(EventosCreateService);
container.registerSingleton(EventosCreateController);

container.registerSingleton<IInscricoesRepository>("InscricoesRepository", InscricoesRepository);
container.registerSingleton(InscricoesCreateService);
container.registerSingleton(InscricoesCreateController);

container.registerSingleton(InscricoesPresenceService);
container.registerSingleton(InscricoesPresenceController);
