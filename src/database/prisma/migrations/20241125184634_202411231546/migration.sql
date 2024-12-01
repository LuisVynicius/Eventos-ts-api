/*
  Warnings:

  - You are about to drop the column `DataEmissaoCertificado` on the `certificados` table. All the data in the column will be lost.
  - You are about to drop the column `DepartamentoEventoId` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `DepartamentoParticipanteId` on the `participantes` table. All the data in the column will be lost.
  - You are about to drop the column `EmailParticipante` on the `participantes` table. All the data in the column will be lost.
  - You are about to drop the column `NomeParticipante` on the `participantes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[CodigoCertificado]` on the table `Certificados` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CPF]` on the table `Participantes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CodigoCertificado` to the `Certificados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CargaHoraria` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DepartamentoId` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PeriodoInscricaoFim` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PeriodoInscricaoInicio` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ResponsavelId` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CPF` to the `Participantes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DepartamentoId` to the `Participantes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UsuarioId` to the `Participantes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `eventos` DROP FOREIGN KEY `Eventos_DepartamentoEventoId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_EventoId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_ParticipanteId_fkey`;

-- DropForeignKey
ALTER TABLE `participantes` DROP FOREIGN KEY `Participantes_DepartamentoParticipanteId_fkey`;

-- AlterTable
ALTER TABLE `certificados` DROP COLUMN `DataEmissaoCertificado`,
    ADD COLUMN `CodigoCertificado` VARCHAR(50) NOT NULL,
    ADD COLUMN `DataEmissao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `Status` VARCHAR(20) NOT NULL DEFAULT 'Emitido',
    MODIFY `ArquivoCertificado` LONGBLOB NULL;

-- AlterTable
ALTER TABLE `eventos` DROP COLUMN `DepartamentoEventoId`,
    ADD COLUMN `CargaHoraria` INTEGER NOT NULL,
    ADD COLUMN `ComunidadeEnvolvida` VARCHAR(50) NULL,
    ADD COLUMN `DepartamentoId` INTEGER NOT NULL,
    ADD COLUMN `Parceria` VARCHAR(100) NULL,
    ADD COLUMN `PeriodoInscricaoFim` DATETIME(3) NOT NULL,
    ADD COLUMN `PeriodoInscricaoInicio` DATETIME(3) NOT NULL,
    ADD COLUMN `ResponsavelId` INTEGER NOT NULL,
    ADD COLUMN `Status` VARCHAR(20) NOT NULL DEFAULT 'Ativo';

-- AlterTable
ALTER TABLE `inscricoes` ADD COLUMN `StatusInscricao` VARCHAR(20) NOT NULL DEFAULT 'Pendente',
    MODIFY `DataInscricao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `participantes` DROP COLUMN `DepartamentoParticipanteId`,
    DROP COLUMN `EmailParticipante`,
    DROP COLUMN `NomeParticipante`,
    ADD COLUMN `CPF` VARCHAR(14) NOT NULL,
    ADD COLUMN `DataAtualizacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `DepartamentoId` INTEGER NOT NULL,
    ADD COLUMN `Matricula` VARCHAR(20) NULL,
    ADD COLUMN `UsuarioId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Usuarios` (
    `UsuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Senha` VARCHAR(255) NOT NULL,
    `DataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Ativo` BOOLEAN NOT NULL DEFAULT true,
    `TipoUsuario` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Usuarios_Email_key`(`Email`),
    PRIMARY KEY (`UsuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventosCursos` (
    `EventoCursoId` INTEGER NOT NULL AUTO_INCREMENT,
    `EventoId` INTEGER NOT NULL,
    `NomeCurso` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`EventoCursoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presenca` (
    `PresencaId` INTEGER NOT NULL AUTO_INCREMENT,
    `InscricaoId` INTEGER NOT NULL,
    `DataPresenca` DATETIME(3) NOT NULL,
    `Presente` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`PresencaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Certificados_CodigoCertificado_key` ON `Certificados`(`CodigoCertificado`);

-- CreateIndex
CREATE UNIQUE INDEX `Participantes_CPF_key` ON `Participantes`(`CPF`);

-- AddForeignKey
ALTER TABLE `Participantes` ADD CONSTRAINT `Participantes_UsuarioId_fkey` FOREIGN KEY (`UsuarioId`) REFERENCES `Usuarios`(`UsuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participantes` ADD CONSTRAINT `Participantes_DepartamentoId_fkey` FOREIGN KEY (`DepartamentoId`) REFERENCES `Departamentos`(`DepartamentoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_ResponsavelId_fkey` FOREIGN KEY (`ResponsavelId`) REFERENCES `Usuarios`(`UsuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_DepartamentoId_fkey` FOREIGN KEY (`DepartamentoId`) REFERENCES `Departamentos`(`DepartamentoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventosCursos` ADD CONSTRAINT `EventosCursos_EventoId_fkey` FOREIGN KEY (`EventoId`) REFERENCES `Eventos`(`EventoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_EventoId_fkey` FOREIGN KEY (`EventoId`) REFERENCES `Eventos`(`EventoId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_ParticipanteId_fkey` FOREIGN KEY (`ParticipanteId`) REFERENCES `Participantes`(`ParticipanteId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_InscricaoId_fkey` FOREIGN KEY (`InscricaoId`) REFERENCES `Inscricoes`(`InscricaoId`) ON DELETE RESTRICT ON UPDATE CASCADE;
