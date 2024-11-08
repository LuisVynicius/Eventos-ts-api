export type CreateInscricoesDTO = {
  EventoId: number;
  ParticipanteId: number;
  DataInscricao: Date;
  Compareceu?: boolean;
  certificado?: number; 
};
