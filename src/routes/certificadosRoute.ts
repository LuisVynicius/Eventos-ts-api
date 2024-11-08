import { Router } from "express";
import { container } from "tsyringe";
import CertificadosGetController from "../entities/Certificados/useCases/GetCertificados/CertificadosGetController";

const certificadosRoute = Router( { mergeParams: true } );

const certificadosGetController: CertificadosGetController = container.resolve(CertificadosGetController);

certificadosRoute.get("/", (req, res, next) => {
    certificadosGetController.handle(req, res, next);
});

export default certificadosRoute;