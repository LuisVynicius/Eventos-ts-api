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
import { ICertificadosRepository } from "../entities/Certificados/repositories/interfaces/ICertificadosRepository";
import CertificadosRepository from "../entities/Certificados/repositories/CertificadoRepository";
import CertificadosGetService from "../entities/Certificados/useCases/GetCertificados/CertificadosGetService";
import CertificadosGetController from "../entities/Certificados/useCases/GetCertificados/CertificadosGetController";
import { IUsuariosRepository } from "../entities/Usuarios/repositories/interfaces/IUsuariosRepository";
import UsuariosRepository from "../entities/Usuarios/repositories/UsuariosRepository";
import UsuariosLoginService from "../entities/Usuarios/useCases/LoginUsuarios/UsuariosLoginService";
import UsuariosLoginController from "../entities/Usuarios/useCases/LoginUsuarios/UsuariosLoginController";
import UsuariosCreateController from "../entities/Usuarios/useCases/CreateUsuarios/UsuariosCreateController";
import UsuariosCreateService from "../entities/Usuarios/useCases/CreateUsuarios/UsuariosCreateService";

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

container.registerSingleton<ICertificadosRepository>("ICertificadosRepository", CertificadosRepository);
container.registerSingleton(CertificadosGetService);
container.registerSingleton(CertificadosGetController);

container.registerSingleton<IUsuariosRepository>("IUsuariosRepository", UsuariosRepository);
container.registerSingleton(UsuariosLoginService);
container.registerSingleton(UsuariosLoginController)

container.registerSingleton(UsuariosCreateController);
container.registerSingleton(UsuariosCreateService)