-- CreateTable
CREATE TABLE `Departamentos` (
    `DepartamentoId` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeDepartamento` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`DepartamentoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eventos` (
    `EventoId` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeEvento` VARCHAR(100) NOT NULL,
    `DataInicioEvento` DATETIME(3) NOT NULL,
    `DataFimEvento` DATETIME(3) NOT NULL,
    `DescricaoEvento` VARCHAR(500) NULL,
    `TipoEvento` VARCHAR(50) NOT NULL,
    `DepartamentoEventoId` INTEGER NOT NULL,

    PRIMARY KEY (`EventoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participantes` (
    `ParticipanteId` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeParticipante` VARCHAR(100) NOT NULL,
    `EmailParticipante` VARCHAR(100) NOT NULL,
    `TipoParticipante` VARCHAR(20) NOT NULL,
    `DepartamentoParticipanteId` INTEGER NOT NULL,

    PRIMARY KEY (`ParticipanteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inscricoes` (
    `InscricaoId` INTEGER NOT NULL AUTO_INCREMENT,
    `EventoId` INTEGER NOT NULL,
    `ParticipanteId` INTEGER NOT NULL,
    `DataInscricao` DATETIME(3) NOT NULL,
    `Compareceu` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`InscricaoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificados` (
    `CertificadoId` INTEGER NOT NULL AUTO_INCREMENT,
    `InscricaoId` INTEGER NOT NULL,
    `ArquivoCertificado` LONGBLOB NOT NULL,
    `DataEmissaoCertificado` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Certificados_InscricaoId_key`(`InscricaoId`),
    PRIMARY KEY (`CertificadoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_DepartamentoEventoId_fkey` FOREIGN KEY (`DepartamentoEventoId`) REFERENCES `Departamentos`(`DepartamentoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participantes` ADD CONSTRAINT `Participantes_DepartamentoParticipanteId_fkey` FOREIGN KEY (`DepartamentoParticipanteId`) REFERENCES `Departamentos`(`DepartamentoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_EventoId_fkey` FOREIGN KEY (`EventoId`) REFERENCES `Eventos`(`EventoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_ParticipanteId_fkey` FOREIGN KEY (`ParticipanteId`) REFERENCES `Participantes`(`ParticipanteId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificados` ADD CONSTRAINT `Certificados_InscricaoId_fkey` FOREIGN KEY (`InscricaoId`) REFERENCES `Inscricoes`(`InscricaoId`) ON DELETE RESTRICT ON UPDATE CASCADE;
