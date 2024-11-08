export type CreateEventosDTO = {
  NomeEvento: string;
  DataInicioEvento: Date;
  DataFimEvento: Date;
  DescricaoEvento?: string | null;
  TipoEvento: string;
  DepartamentoEventoId: number;
}