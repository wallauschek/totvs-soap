import { Injectable } from '@nestjs/common';
import { WsSoapService } from '../wsSoap/wsSoap.service';
import { CreateFinLanDataBRDto } from './dto/create-financeiro.dto';

@Injectable()
export class FinanceiroService {
  constructor(private readonly wsSoap: WsSoapService) {}

  async create(createFinLanDataBR: CreateFinLanDataBRDto) {
    const xml = `<![CDATA[
      <FinLAN>
        <FLAN>
          <CODCOLIGADA>${createFinLanDataBR.codColigada}</CODCOLIGADA>
          <IDLAN>${createFinLanDataBR.idLan}</IDLAN>
          <NFOUDUP>${createFinLanDataBR.NFOUDUP}</NFOUDUP>
          <CLASSIFICACAO>${createFinLanDataBR.classificacao}</CLASSIFICACAO>
          <PAGREC>${createFinLanDataBR.pagRec}</PAGREC>
          <STATUSLAN>${createFinLanDataBR.statusLan}</STATUSLAN>
          <CODAPLICACAO>${createFinLanDataBR.codAplicacao}</CODAPLICACAO>
          <HISTORICO>${createFinLanDataBR.historico}</HISTORICO>
          <DATACRIACAO>${createFinLanDataBR.dataCriacao}</DATACRIACAO>
          <DATAVENCIMENTO>${createFinLanDataBR.dataVencimento}</DATAVENCIMENTO>
          <DATAEMISSAO>${createFinLanDataBR.dataEmissao}</DATAEMISSAO>
          <VALORORIGINAL>${createFinLanDataBR.valorOriginal}</VALORORIGINAL>
          <CODCOLCFO>${createFinLanDataBR.codColCFO}</CODCOLCFO>
          <CODCFO>${createFinLanDataBR.codCFO}</CODCFO>
          <CODCOLCXA>${createFinLanDataBR.codColCxa}</CODCOLCXA>
          <CODTDO>${createFinLanDataBR.codTDO}</CODTDO>
          <CODFILIAL>${createFinLanDataBR.codFilial}</CODFILIAL>
          <SERIEDOCUMENTO>${createFinLanDataBR.serieDocumento}</SERIEDOCUMENTO>
          <CODTB2FLX>${createFinLanDataBR.codTb2Flx}</CODTB2FLX>
          <CODTB3FLX>${createFinLanDataBR.codTb3Flx}</CODTB3FLX>
          <CODCCUSTO>${createFinLanDataBR.codCusto}</CODCCUSTO>
          <TIPOCONTABILLAN>${createFinLanDataBR.tipoContabilLan}</TIPOCONTABILLAN>
          <BAIXAAUTORIZADA>${createFinLanDataBR.baixaAutorizada}</BAIXAAUTORIZADA>
          <APLICFORMULA>${createFinLanDataBR.aplicFormula}</APLICFORMULA>
          <FORMULAJUROS>${createFinLanDataBR.formulaJuros}</FORMULAJUROS>
          <FORMULAMULTA>${createFinLanDataBR.formulaMulta}</FORMULAMULTA>
          <FORMULAVALOROP1>${createFinLanDataBR.formulaValorOp1}</FORMULAVALOROP1>
          <PreencherRatCCusto>${createFinLanDataBR.preencherRatCCusto}</PreencherRatCCusto>
          <PreencherRatDepto>${createFinLanDataBR.preencherRatDepto}</PreencherRatDepto>
          <CODCOLCONVENIO>${createFinLanDataBR.codColConvenio}</CODCOLCONVENIO>
        </FLAN>
      </FinLAN>
    ]]>`;

    const createData = await this.wsSoap.executaSaveRecordDataServer({
      DataServerName: 'FinLanDataBR',
      Contexto: 'CODSISTEMA=F;CODCOLIGADA=1;CODUSUARIO=pedro',
      XML: xml,
    });

    return createData;
  }

  findOne(coligada: number, idLancamento: number) {
    const data = this.wsSoap.executaReadRecordDataServer({
      DataServerName: 'FinLanDataBR',
      Contexto: 'CODSISTEMA=F;CODCOLIGADA=1;CODUSUARIO=pedro',
      PrimaryKey: `${coligada};${idLancamento}`,
    });

    return data;
  }

  // findAll() {
  //   return `This action returns all financeiro`;
  // }

  // update(id: number, updateFinanceiroDto: UpdateFinanceiroDto) {
  //   return `This action updates a #${id} financeiro`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} financeiro`;
  // }
}
