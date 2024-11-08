import { container } from "tsyringe";
import CertificadosGetController from "./CertificadosGetController";
import CertificadosGetService from "./CertificadosGetService";

export default async function CreateParticipantes() {

    const getCertificadosController = container.resolve(CertificadosGetController);
    const getCertificadosService = container.resolve(CertificadosGetService);

    return { getCertificadosController, getCertificadosService };
}
