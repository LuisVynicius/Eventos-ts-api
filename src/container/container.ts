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
import EventosCreateService from "../entities/Eventos/useCases/EventosCreateService";
import EventosCreateController from "../entities/Eventos/useCases/EventosCreateController";

container.registerSingleton<IDepartamentoRepository>("DepartamentoRepository", DepartamentoRepository);
container.registerSingleton(DepartamentoCreateService);
container.registerSingleton(DepartamentoController);

container.registerSingleton<IParticipantesRepository>("ParticipantesRepository", ParticipantesRepository);
container.registerSingleton(ParticipantesCreateService);
container.registerSingleton(ParticipantesCreateController);

container.registerSingleton<IEventosRepository>("EventosRepository", EventosRepository);
container.registerSingleton(EventosCreateService);
container.registerSingleton(EventosCreateController);
