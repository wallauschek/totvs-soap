export class CreateFinLanDataBRDto {
  codColigada: number;
  idLan: number;
  NFOUDUP: number;
  classificacao: number;
  pagRec: number;
  statusLan: number;
  codAplicacao: string;
  historico: string;
  dataCriacao: string;
  dataVencimento: string;
  dataEmissao: string;
  valorOriginal: number;
  codColCFO: number;
  codCFO: string;
  codColCxa: number;
  codTDO: number;
  codFilial: number;
  serieDocumento: string;
  codTb2Flx: string;
  codTb3Flx: string;
  codCusto: string;
  tipoContabilLan: number;
  baixaAutorizada: number;
  aplicFormula: string;
  formulaJuros: string;
  formulaMulta: string;
  formulaValorOp1: string;
  preencherRatCCusto: boolean;
  preencherRatDepto: boolean;
  codColConvenio: number;
}

export class CreateBaixaSimplesDataDto {
  codColigada: number;
  idLan: number;
  valor: number;
}

export class GerarBoletoAgrupadoDto {
  codUsuario: string;
  codColigada: number;
  codFilial: number;
  codTipoCurso: number;
  ra: string;
  DataVencimentoInicial: Date;
  DataVencimentoFinal: Date;
  listaIdHabilitacaoFilial: number[];
  listaIdPeriodosLetivos: number[];
  listaCodPlanosPagamento: string[];
  listaCodServicos: number[];
}
