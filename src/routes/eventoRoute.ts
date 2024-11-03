import { Router } from "express";
import EventosCreateController from "../entities/Eventos/useCases/EventosCreateController";
import { container } from "tsyringe";

const eventoRoute = Router( { mergeParams: true } );

const eventosCreateController: EventosCreateController = container.resolve(EventosCreateController);

eventoRoute.post("/", (req, res, next) => {
    eventosCreateController.handle(req, res, next);
});

export default eventoRoute;