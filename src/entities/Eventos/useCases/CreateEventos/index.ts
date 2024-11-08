import { container } from "tsyringe";
import EventosCreateController from "./EventosCreateController";
import EventosCreateService from "./EventosCreateService";

export default async function CreateEventos() {

    const createEventosController = container.resolve(EventosCreateController);
    const createEventosService = container.resolve(EventosCreateService);

    return { createEventosController, createEventosService };
}
