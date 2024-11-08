import { inject, injectable } from "tsyringe";
import { Request, Response, NextFunction } from 'express';
import { GetCertificadosDTO } from "./GetCertificadosDTO";
import CertificadosGetService from "./CertificadosGetService";

@injectable()
export default class CertificadosGetController {

    private certificadosGetService: CertificadosGetService;

    constructor(
        @inject(CertificadosGetService) certificadosGetService: CertificadosGetService
    ) {
        this.certificadosGetService = certificadosGetService;
    }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        const getCertificadosDTO = request.params as unknown as GetCertificadosDTO;

        const certificado = await this.certificadosGetService.get(getCertificadosDTO);

        return response.status(200).send(certificado);

    }
}