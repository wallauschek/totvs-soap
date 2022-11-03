import { Injectable } from '@nestjs/common';
import { WsSoapService } from '../wsSoap/wsSoap.service';
import {
  CreateBaixaSimplesDataDto,
  CreateFinLanDataBRDto,
} from './dto/create-financeiro.dto';

@Injectable()
export class FinanceiroService {
  constructor(private readonly wsSoap: WsSoapService) {}

  async createFinLanDataBR(createFinLanDataBR: CreateFinLanDataBRDto) {
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

  async findOneFinLanDataBR(coligada: number, idLancamento: number) {
    const data = await this.wsSoap.executaReadRecordDataServer({
      DataServerName: 'FinLanDataBR',
      Contexto: 'CODSISTEMA=F;CODCOLIGADA=1;CODUSUARIO=pedro',
      PrimaryKey: `${coligada};${idLancamento}`,
    });

    return data;
  }

  async baixaSimplesLancamento(
    baixaSimplesLancamento: CreateBaixaSimplesDataDto,
  ) {
    const xml = `<![CDATA[<?xml version="1.0" encoding="utf-16"?>
    <FinLanBaixaParamsProc z:Id="i1" xmlns="http://www.totvs.com.br/RM/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/">
      <ActionModule xmlns="http://www.totvs.com/">F</ActionModule>
      <ActionName xmlns="http://www.totvs.com/">FinLanBaixaAction</ActionName>
      <CanParallelize xmlns="http://www.totvs.com/">true</CanParallelize>
      <CanSendMail xmlns="http://www.totvs.com/">false</CanSendMail>
      <CanWaitSchedule xmlns="http://www.totvs.com/">false</CanWaitSchedule>
      <ConnectionId i:nil="true" xmlns="http://www.totvs.com/" />
      <ConnectionString i:nil="true" xmlns="http://www.totvs.com/" />
      <Context z:Id="i2" xmlns="http://www.totvs.com/" xmlns:a="http://www.totvs.com.br/RM/">
        <a:_params xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$EXERCICIOFISCAL</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODLOCPRT</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODTIPOCURSO</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$EDUTIPOUSR</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUNIDADEBIB</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODCOLIGADA</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$RHTIPOUSR</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODIGOEXTERNO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODSISTEMA</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">F</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUSUARIOSERVICO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema" />
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUSUARIO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">13912764778</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$IDPRJ</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CHAPAFUNCIONARIO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODFILIAL</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">1</b:Value>
          </b:KeyValueOfanyTypeanyType>
        </a:_params>
        <a:Environment>DotNet</a:Environment>
      </Context>
      <CustomData i:nil="true" xmlns="http://www.totvs.com/" />
      <DisableIsolateProcess xmlns="http://www.totvs.com/">false</DisableIsolateProcess>
      <DriverType i:nil="true" xmlns="http://www.totvs.com/" />
      <ExecutionId xmlns="http://www.totvs.com/">2f05f369-2b83-494e-80d2-482f102b7738</ExecutionId>
      <FailureMessage xmlns="http://www.totvs.com/">Falha na execução do processo</FailureMessage>
      <FriendlyLogs i:nil="true" xmlns="http://www.totvs.com/" />
      <HideProgressDialog xmlns="http://www.totvs.com/">false</HideProgressDialog>
      <HostName xmlns="http://www.totvs.com/">CEL-TS02</HostName>
      <Initialized xmlns="http://www.totvs.com/">true</Initialized>
      <Ip xmlns="http://www.totvs.com/">10.10.253.184</Ip>
      <IsolateProcess xmlns="http://www.totvs.com/">false</IsolateProcess>
      <JobServerHostName xmlns="http://www.totvs.com/">CEL-APP-AMT</JobServerHostName>
      <MasterActionName i:nil="true" xmlns="http://www.totvs.com/" />
      <MaximumQuantityOfPrimaryKeysPerProcess xmlns="http://www.totvs.com/">1000</MaximumQuantityOfPrimaryKeysPerProcess>
      <MinimumQuantityOfPrimaryKeysPerProcess xmlns="http://www.totvs.com/">1</MinimumQuantityOfPrimaryKeysPerProcess>
      <NetworkUser xmlns="http://www.totvs.com/">natasha.barcellos</NetworkUser>
      <NotifyEmail xmlns="http://www.totvs.com/">false</NotifyEmail>
      <NotifyEmailList i:nil="true" xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
      <NotifyFluig xmlns="http://www.totvs.com/">false</NotifyFluig>
      <OnlineMode xmlns="http://www.totvs.com/">false</OnlineMode>
      <PrimaryKeyList xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
        <a:ArrayOfanyType>
          <a:anyType i:type="b:short" xmlns:b="http://www.w3.org/2001/XMLSchema">1</a:anyType>
          <a:anyType i:type="b:int" xmlns:b="http://www.w3.org/2001/XMLSchema">${baixaSimplesLancamento.idLan}</a:anyType>
        </a:ArrayOfanyType>
      </PrimaryKeyList>
      <PrimaryKeyNames xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
        <a:string>CODCOLIGADA</a:string>
        <a:string>IDLAN</a:string>
      </PrimaryKeyNames>
      <PrimaryKeyTableName xmlns="http://www.totvs.com/">FLAN</PrimaryKeyTableName>
      <ProcessName xmlns="http://www.totvs.com/">Baixar Lançamento</ProcessName>
      <QuantityOfSplits xmlns="http://www.totvs.com/">0</QuantityOfSplits>
      <SaveLogInDatabase xmlns="http://www.totvs.com/">true</SaveLogInDatabase>
      <SaveParamsExecution xmlns="http://www.totvs.com/">false</SaveParamsExecution>
      <ScheduleDateTime xmlns="http://www.totvs.com/">2022-10-28T10:37:09.3556192-03:00</ScheduleDateTime>
      <Scheduler xmlns="http://www.totvs.com/">JobMonitor</Scheduler>
      <SendMail xmlns="http://www.totvs.com/">false</SendMail>
      <ServerName xmlns="http://www.totvs.com/">FinLanBaixaData</ServerName>
      <ServiceInterface i:type="b:RuntimeType" z:FactoryType="c:UnitySerializationHolder" xmlns="http://www.totvs.com/" xmlns:a="http://schemas.datacontract.org/2004/07/System" xmlns:b="-mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089-System-System.RuntimeType" xmlns:c="-mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089-System-System.UnitySerializationHolder">
        <Data i:type="d:string" xmlns="" xmlns:d="http://www.w3.org/2001/XMLSchema">RM.Fin.Lan.IFinLanBaixaData</Data>
        <UnityType i:type="d:int" xmlns="" xmlns:d="http://www.w3.org/2001/XMLSchema">4</UnityType>
        <AssemblyName i:type="d:string" xmlns="" xmlns:d="http://www.w3.org/2001/XMLSchema">RM.Fin.Lan.Intf, Version=12.1.33.307, Culture=neutral, PublicKeyToken=null</AssemblyName>
      </ServiceInterface>
      <ShouldParallelize xmlns="http://www.totvs.com/">false</ShouldParallelize>
      <ShowReExecuteButton xmlns="http://www.totvs.com/">true</ShowReExecuteButton>
      <StatusMessage i:nil="true" xmlns="http://www.totvs.com/" />
      <SuccessMessage xmlns="http://www.totvs.com/">Processo executado com sucesso</SuccessMessage>
      <SyncExecution xmlns="http://www.totvs.com/">false</SyncExecution>
      <UseJobMonitor xmlns="http://www.totvs.com/">true</UseJobMonitor>
      <UserName xmlns="http://www.totvs.com/">13912764778</UserName>
      <WaitSchedule xmlns="http://www.totvs.com/">false</WaitSchedule>
      <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
      <CodMoeda>R$</CodMoeda>
      <ContabilizarPosBaixa>false</ContabilizarPosBaixa>
      <CotacaoBaixa>0</CotacaoBaixa>
      <DataBaixa>2022-10-28T00:00:00-03:00</DataBaixa>
      <DataSistema>2022-10-28T00:00:00-03:00</DataSistema>
      <HistoricoBaixa>[HIS]</HistoricoBaixa>
      <MotivoBxProtheus i:nil="true" />
      <TipoGeracaoExtrato>ExtratoParaCadaLancamento</TipoGeracaoExtrato>
      <UsarDataVencimentoBaixa>false</UsarDataVencimentoBaixa>
      <BaixaCredDevVinculado>false</BaixaCredDevVinculado>
      <CodColCxa>0</CodColCxa>
      <CodColCxaCaixa>-1</CodColCxaCaixa>
      <CodCxa />
      <CodCxaCaixa />
      <FormasPagamento>
        <FinFormaPagtoBaixaParamsProc>
          <Cartao />
          <Cheque />
          <CodColCxa>1</CodColCxa>
          <CodColProp>1</CodColProp>
          <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
          <CodCxa>PAGAR.ME</CodCxa>
          <CodFilial>1</CodFilial>
          <CodFormaPagto>0000000041</CodFormaPagto>
          <CodImg>2</CodImg>
          <CodUsuario i:nil="true" />
          <CompensarExtratoBaixa>NaoCompensar</CompensarExtratoBaixa>
          <Contabilizacao xmlns:a="http://schemas.datacontract.org/2004/07/RM.Fin.Lan" />
          <DataCompensacaoExtrato i:nil="true" />
          <DescFormaPagto>Pagar.me Crédito 2 a 6 parcelas</DescFormaPagto>
          <IdFormaPagto>62</IdFormaPagto>
          <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
          <IdPagto>1</IdPagto>
          <IdParcelamento>0</IdParcelamento>
          <Img i:nil="true" xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing" />
          <ImprimeCheque>false</ImprimeCheque>
          <MotivoBxProtheus i:nil="true" />
          <Mutuo />
          <OpcaoParcelamento>1</OpcaoParcelamento>
          <PagRec>Receber</PagRec>
          <SequencialPagto>1</SequencialPagto>
          <TipoFormaPagto>Cartao</TipoFormaPagto>
          <TipoTransacao>WCF</TipoTransacao>
          <Valor>${baixaSimplesLancamento.valor}</Valor>
        </FinFormaPagtoBaixaParamsProc>
      </FormasPagamento>
      <IdFormaPagto i:nil="true" />
      <IdSessaoCaixa>-1</IdSessaoCaixa>
      <IdTransacaoPIX i:nil="true" />
      <IsBoleto>false</IsBoleto>
      <IsHabilitaPIX>false</IsHabilitaPIX>
      <IsHabilitaTEF>false</IsHabilitaTEF>
      <IsModuloDeCaixa>false</IsModuloDeCaixa>
      <ItensBaixa>
        <FinItemBaixa z:Id="i3">
          <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
          <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
          <AplicarDescontoTotal i:nil="true" />
          <CampoAlfaOp1 />
          <CampoAlfaOp2 />
          <CampoAlfaOp3 />
          <CampoDiferenca i:nil="true" />
          <CamposComplementares xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
            <a:KeyValueOfstringanyType>
              <a:Key>CODCOLIGADA</a:Key>
              <a:Value i:type="b:short" xmlns:b="http://www.w3.org/2001/XMLSchema">1</a:Value>
            </a:KeyValueOfstringanyType>
            <a:KeyValueOfstringanyType>
              <a:Key>IDLAN</a:Key>
              <a:Value i:type="b:int" xmlns:b="http://www.w3.org/2001/XMLSchema">${baixaSimplesLancamento.idLan}</a:Value>
            </a:KeyValueOfstringanyType>
            <a:KeyValueOfstringanyType>
              <a:Key>IDBAIXA</a:Key>
              <a:Value i:type="b:int" xmlns:b="http://www.w3.org/2001/XMLSchema">-1</a:Value>
            </a:KeyValueOfstringanyType>
            <a:KeyValueOfstringanyType>
              <a:Key>RECCREATEDBY</a:Key>
              <a:Value i:nil="true" />
            </a:KeyValueOfstringanyType>
            <a:KeyValueOfstringanyType>
              <a:Key>RECCREATEDON</a:Key>
              <a:Value i:nil="true" />
            </a:KeyValueOfstringanyType>
            <a:KeyValueOfstringanyType>
              <a:Key>RECMODIFIEDBY</a:Key>
              <a:Value i:nil="true" />
            </a:KeyValueOfstringanyType>
            <a:KeyValueOfstringanyType>
              <a:Key>RECMODIFIEDON</a:Key>
              <a:Value i:nil="true" />
            </a:KeyValueOfstringanyType>
          </CamposComplementares>
          <CodCCusto>1.04.002.015</CodCCusto>
          <CodColCxa>1</CodColCxa>
          <CodColXCX>0</CodColXCX>
          <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
          <CodCxa>PAGAR.ME</CodCxa>
          <CodDepartamento />
          <CodEventoBaixa>261</CodEventoBaixa>
          <CodFilial>1</CodFilial>
          <CodTabOp1 />
          <CodTabOp2>0017</CodTabOp2>
          <CodTabOp3>02.001.235</CodTabOp3>
          <CodTabOp4 />
          <CodTabOp5>010</CodTabOp5>
          <CompensarExtratoBaixa>NaoCompensar</CompensarExtratoBaixa>
          <CotacaoBaixa>1</CotacaoBaixa>
          <DataBaixa>2022-10-28T00:00:00-03:00</DataBaixa>
          <DataCheque i:nil="true" />
          <DataCompensacaoExtrato>0001-01-01T00:00:00</DataCompensacaoExtrato>
          <DataContabilizBx>2022-10-28T00:00:00-03:00</DataContabilizBx>
          <DataOp1 i:nil="true" />
          <DataOp2 i:nil="true" />
          <DataOp3 i:nil="true" />
          <DataOp4 i:nil="true" />
          <DataOp5 i:nil="true" />
          <DataVencimentoLancamento>2022-10-28T00:00:00</DataVencimentoLancamento>
          <IdBaixa>100001</IdBaixa>
          <IdFormaPagto>62</IdFormaPagto>
          <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
          <IdPagto>1</IdPagto>
          <IdParcelamento>0</IdParcelamento>
          <IdTransacao>0</IdTransacao>
          <IdTransacaoSiTef>0</IdTransacaoSiTef>
          <IdXCX>0</IdXCX>
          <ImprimirCheque>false</ImprimirCheque>
          <LancamentoLiquido>
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
            <OrigemValoresParaCalculoValorLiquido>
              <OrigemValorCap>BaseDados</OrigemValorCap>
              <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
              <OrigemValorIntegracao>BaseDados</OrigemValorIntegracao>
              <OrigemValorJuros>BaseDados</OrigemValorJuros>
              <OrigemValorMulta>BaseDados</OrigemValorMulta>
              <OrigemValorOp1>BaseDados</OrigemValorOp1>
              <OrigemValorOp2>BaseDados</OrigemValorOp2>
              <OrigemValorOp3>BaseDados</OrigemValorOp3>
              <OrigemValorOp4>BaseDados</OrigemValorOp4>
              <OrigemValorOp5>BaseDados</OrigemValorOp5>
              <OrigemValorOp6>BaseDados</OrigemValorOp6>
              <OrigemValorOp7>BaseDados</OrigemValorOp7>
              <OrigemValorOp8>BaseDados</OrigemValorOp8>
              <OrigemValoresAcordo>BaseDados</OrigemValoresAcordo>
            </OrigemValoresParaCalculoValorLiquido>
            <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
            <ValorAdiantamento>0</ValorAdiantamento>
            <ValorCap>0</ValorCap>
            <ValorDesconto>0</ValorDesconto>
            <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
            <ValorDevolucao>0</ValorDevolucao>
            <ValorINSS>0</ValorINSS>
            <ValorIRRF>0</ValorIRRF>
            <ValorJuros>0</ValorJuros>
            <ValorJurosAcordo>0.0000</ValorJurosAcordo>
            <ValorJurosVendor>0</ValorJurosVendor>
            <ValorLiquido>${baixaSimplesLancamento.valor}</ValorLiquido>
            <ValorMulta>0</ValorMulta>
            <ValorNotaCredito>0</ValorNotaCredito>
            <ValorOp1>0</ValorOp1>
            <ValorOp2>0</ValorOp2>
            <ValorOp3>0.0000</ValorOp3>
            <ValorOp4>0</ValorOp4>
            <ValorOp5>0</ValorOp5>
            <ValorOp6>0</ValorOp6>
            <ValorOp7>0.0000</ValorOp7>
            <ValorOp8>0</ValorOp8>
            <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
            <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
            <ValorRetencoes>0</ValorRetencoes>
            <ValorSESTSENAT>0</ValorSESTSENAT>
          </LancamentoLiquido>
          <ListTributos />
          <ListaDeExtrato />
          <ListaValoresIntegracaoItemBaixaPar />
          <ModeloContabilizacao>0</ModeloContabilizacao>
          <MotivoBxProtheus i:nil="true" />
          <NaoIncluirBaixa>false</NaoIncluirBaixa>
          <NumEventoBaixa>409</NumEventoBaixa>
          <NumeroCheque i:nil="true" />
          <OpcaoParcelamento>1</OpcaoParcelamento>
          <OperacaoValorOp1>Desconta</OperacaoValorOp1>
          <OperacaoValorOp2>Desconta</OperacaoValorOp2>
          <OperacaoValorOp3>Nada</OperacaoValorOp3>
          <OperacaoValorOp4>Desconta</OperacaoValorOp4>
          <OperacaoValorOp5>Acrescenta</OperacaoValorOp5>
          <OperacaoValorOp6>Acrescenta</OperacaoValorOp6>
          <OperacaoValorOp7>Nada</OperacaoValorOp7>
          <OperacaoValorOp8>Acrescenta</OperacaoValorOp8>
          <OrigemContabilizacao>EventoContabil</OrigemContabilizacao>
          <OrigemValorCap>BaseDados</OrigemValorCap>
          <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
          <OrigemValorJuros>BaseDados</OrigemValorJuros>
          <OrigemValorMulta>BaseDados</OrigemValorMulta>
          <OrigemValorOp1>BaseDados</OrigemValorOp1>
          <OrigemValorOp2>BaseDados</OrigemValorOp2>
          <OrigemValorOp3>BaseDados</OrigemValorOp3>
          <OrigemValorOp4>BaseDados</OrigemValorOp4>
          <OrigemValorOp5>BaseDados</OrigemValorOp5>
          <OrigemValorOp6>BaseDados</OrigemValorOp6>
          <OrigemValorOp7>BaseDados</OrigemValorOp7>
          <OrigemValorOp8>BaseDados</OrigemValorOp8>
          <OrigemValores>
            <OrigemValorCap>BaseDados</OrigemValorCap>
            <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
            <OrigemValorIntegracao>BaseDados</OrigemValorIntegracao>
            <OrigemValorJuros>BaseDados</OrigemValorJuros>
            <OrigemValorMulta>BaseDados</OrigemValorMulta>
            <OrigemValorOp1>BaseDados</OrigemValorOp1>
            <OrigemValorOp2>BaseDados</OrigemValorOp2>
            <OrigemValorOp3>BaseDados</OrigemValorOp3>
            <OrigemValorOp4>BaseDados</OrigemValorOp4>
            <OrigemValorOp5>BaseDados</OrigemValorOp5>
            <OrigemValorOp6>BaseDados</OrigemValorOp6>
            <OrigemValorOp7>BaseDados</OrigemValorOp7>
            <OrigemValorOp8>BaseDados</OrigemValorOp8>
            <OrigemValoresAcordo>BaseDados</OrigemValoresAcordo>
          </OrigemValores>
          <PagRec>Receber</PagRec>
          <RateiosCCu>
            <FinItemBaixaRatCCu z:Id="i4">
              <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
              <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
              <CodCCusto>1.04.002.015</CodCCusto>
              <CodColNatFinanceira>0</CodColNatFinanceira>
              <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
              <CodNatFinanceira />
              <CodTbGrupoOrc />
              <IdBaixa>100001</IdBaixa>
              <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
              <IdPrj i:nil="true" />
              <IdRatCCu>-1</IdRatCCu>
              <IdTrf i:nil="true" />
              <Percentual>100</Percentual>
              <Valor>${baixaSimplesLancamento.valor}</Valor>
            </FinItemBaixaRatCCu>
          </RateiosCCu>
          <RateiosCCuLan>
            <FinItemBaixaRatCCu z:Id="i5">
              <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
              <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
              <CodCCusto>1.04.002.015</CodCCusto>
              <CodColNatFinanceira>0</CodColNatFinanceira>
              <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
              <CodNatFinanceira />
              <CodTbGrupoOrc />
              <IdBaixa>100001</IdBaixa>
              <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
              <IdPrj i:nil="true" />
              <IdRatCCu>866260</IdRatCCu>
              <IdTrf i:nil="true" />
              <Percentual>100</Percentual>
              <Valor>${baixaSimplesLancamento.valor}</Valor>
            </FinItemBaixaRatCCu>
          </RateiosCCuLan>
          <RateiosDepto />
          <SequencialPagto>1</SequencialPagto>
          <SinalOp1>(- )</SinalOp1>
          <SinalOp2>(- )</SinalOp2>
          <SinalOp3 />
          <SinalOp4>(- )</SinalOp4>
          <SinalOp5>(+)</SinalOp5>
          <SinalOp6>(+)</SinalOp6>
          <SinalOp7 />
          <SinalOp8>(+)</SinalOp8>
          <TipoDiferenca i:nil="true" />
          <TipoFormaPagto>Cartao</TipoFormaPagto>
          <TipoRetornoBancario>Nenhum</TipoRetornoBancario>
          <TipoTransacao>WCF</TipoTransacao>
          <Usuario>13912764778</Usuario>
          <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
          <ValorBaixa>${baixaSimplesLancamento.valor}</ValorBaixa>
          <ValorCap>0</ValorCap>
          <ValorDesconto>0</ValorDesconto>
          <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
          <ValorDescontoPontual>0</ValorDescontoPontual>
          <ValorDevolucao>0</ValorDevolucao>
          <ValorDiferenca i:nil="true" />
          <ValorINSS>0</ValorINSS>
          <ValorIRRF>0</ValorIRRF>
          <ValorJuros>0</ValorJuros>
          <ValorJurosAcordo>0.0000</ValorJurosAcordo>
          <ValorJurosVendor>0.0000</ValorJurosVendor>
          <ValorMulta>0</ValorMulta>
          <ValorNotaCredito>0</ValorNotaCredito>
          <ValorNotaCreditoAdiantamento>0</ValorNotaCreditoAdiantamento>
          <ValorOp1>0</ValorOp1>
          <ValorOp2>0</ValorOp2>
          <ValorOp3>0.0000</ValorOp3>
          <ValorOp4>0</ValorOp4>
          <ValorOp5>0</ValorOp5>
          <ValorOp6>0</ValorOp6>
          <ValorOp7>0.0000</ValorOp7>
          <ValorOp8>0</ValorOp8>
          <ValorOpComSinal1>0</ValorOpComSinal1>
          <ValorOpComSinal2>0</ValorOpComSinal2>
          <ValorOpComSinal3>0.0000</ValorOpComSinal3>
          <ValorOpComSinal4>0</ValorOpComSinal4>
          <ValorOpComSinal5>0</ValorOpComSinal5>
          <ValorOpComSinal6>0</ValorOpComSinal6>
          <ValorOpComSinal7>0.0000</ValorOpComSinal7>
          <ValorOpComSinal8>0</ValorOpComSinal8>
          <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
          <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
          <ValorRetencoes>0</ValorRetencoes>
          <ValorSESTSENAT>0</ValorSESTSENAT>
          <ValorVinculado>0</ValorVinculado>
          <contabil z:Id="i6">
            <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
            <CodColCFO>0</CodColCFO>
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <CodEventoContabil>261</CodEventoContabil>
            <CodEventoContabilDefault>261</CodEventoContabilDefault>
            <CodLoteDefault>400</CodLoteDefault>
            <CodigoCliFor_Filial>00017847</CodigoCliFor_Filial>
            <ContabilizacaoReadOnly>false</ContabilizacaoReadOnly>
            <DataContabilizacao>2022-10-28T00:00:00-03:00</DataContabilizacao>
            <DataContabilizacaoDefault>2022-10-28T00:00:00-03:00</DataContabilizacaoDefault>
            <ExecutaEventoContabilAutomatico>true</ExecutaEventoContabilAutomatico>
            <FiltroProc_LookupEventoContabil>Default</FiltroProc_LookupEventoContabil>
            <HabilitaInfoEventoContabil>true</HabilitaInfoEventoContabil>
            <HasChanges>false</HasChanges>
            <HasFilterProc_EventoContabil>false</HasFilterProc_EventoContabil>
            <IdLogEventoContabil />
            <IdOperacao i:nil="true" />
            <IdOperacao_LancamentoExcluido i:nil="true" />
            <LancamentoContabil i:nil="true" />
            <LancamentoExcluido>false</LancamentoExcluido>
            <LancamentosAutomaticos>false</LancamentosAutomaticos>
            <LogAtivado>false</LogAtivado>
            <LogEvc i:nil="true" />
            <NaoVisualizarInfoEventoContabil>false</NaoVisualizarInfoEventoContabil>
            <NumDocumentoPartida />
            <OwnerData i:type="a:List\`1" xmlns:a="-mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089-System.Collections.Generic-System.Collections.Generic.List\`1[[RM.Fin.Lan.FinLanEventoContabilPar, RM.Fin.Lan.IService, Version=12.1.33.308, Culture=neutral, PublicKeyToken=null]]">
              <FinLanEventoContabilPar z:Id="i7">
                <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
                <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
                <CampoAlfaOp1 />
                <CampoAlfaOp2 />
                <CampoAlfaOp3 />
                <ChapaFuncionario />
                <CodCCusto>1.04.002.015</CodCCusto>
                <CodCfo>00017847</CodCfo>
                <CodColCfo>0</CodColCfo>
                <CodColCxa>1</CodColCxa>
                <CodColXCx i:nil="true" />
                <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
                <CodCxa>PAGAR.ME</CodCxa>
                <CodDepartamento />
                <CodEvento>261</CodEvento>
                <CodEventoBaixa>261</CodEventoBaixa>
                <CodFilial>1</CodFilial>
                <CodReceita i:nil="true" />
                <CodServico i:nil="true" />
                <CodTabOp1 />
                <CodTabOp2>0017</CodTabOp2>
                <CodTabOp3>02.001.235</CodTabOp3>
                <CodTabOp4 />
                <CodTabOp5>010</CodTabOp5>
                <CodTdo>130</CodTdo>
                <Contabilizacao>
                  <CtbEventoLancContabilPar z:Id="i8">
                    <CodCCusto>1.04.002.015</CodCCusto>
                    <CodColConta>1</CodColConta>
                    <CodColContaEliminacao i:nil="true" />
                    <CodColEliminacao i:nil="true" />
                    <CodConta>1.1.01.01.017</CodConta>
                    <CodContaEliminacao />
                    <CodDepartamento />
                    <CodFilial>1</CodFilial>
                    <CodHistP>00093</CodHistP>
                    <CodeAplicarNoValor i:nil="true" />
                    <ComplHistorico>COLONIA DE FERIAS - RARA NONO TAPAJOS  </ComplHistorico>
                    <DescricaoConta>CAIXA PAGAR.ME</DescricaoConta>
                    <IdClasseValor i:nil="true" />
                    <IdItemContabil i:nil="true" />
                    <IdLogEventoContabil i:nil="true" />
                    <LogEvc />
                    <LogEventoAtivado>false</LogEventoAtivado>
                    <NumeroInterno>0</NumeroInterno>
                    <Rateio />
                    <ReduzidoConta>566</ReduzidoConta>
                    <Tipo>Debito</Tipo>
                    <Valor>${baixaSimplesLancamento.valor}</Valor>
                    <ValorSegundaMoeda>0</ValorSegundaMoeda>
                  </CtbEventoLancContabilPar>
                  <CtbEventoLancContabilPar z:Id="i9">
                    <CodCCusto>1.04.002.015</CodCCusto>
                    <CodColConta>1</CodColConta>
                    <CodColContaEliminacao i:nil="true" />
                    <CodColEliminacao i:nil="true" />
                    <CodConta>4.1.01.01.009</CodConta>
                    <CodContaEliminacao />
                    <CodDepartamento />
                    <CodFilial>1</CodFilial>
                    <CodHistP>00093</CodHistP>
                    <CodeAplicarNoValor i:nil="true" />
                    <ComplHistorico>COLONIA DE FERIAS - RARA NONO TAPAJOS  </ComplHistorico>
                    <DescricaoConta>OUTROS SERVICOS</DescricaoConta>
                    <IdClasseValor i:nil="true" />
                    <IdItemContabil i:nil="true" />
                    <IdLogEventoContabil i:nil="true" />
                    <LogEvc />
                    <LogEventoAtivado>false</LogEventoAtivado>
                    <NumeroInterno>0</NumeroInterno>
                    <Rateio />
                    <ReduzidoConta>412</ReduzidoConta>
                    <Tipo>Credito</Tipo>
                    <Valor>${baixaSimplesLancamento.valor}</Valor>
                    <ValorSegundaMoeda>0</ValorSegundaMoeda>
                  </CtbEventoLancContabilPar>
                </Contabilizacao>
                <DataAcordo i:nil="true" />
                <DataBaixa>2022-10-28T00:00:00-03:00</DataBaixa>
                <DataCheque i:nil="true" />
                <DataContabiliz i:nil="true" />
                <DataContabilizBx>2022-10-28T00:00:00-03:00</DataContabilizBx>
                <DataCotacaoMoedaOrigem>2022-10-28T00:00:00-03:00</DataCotacaoMoedaOrigem>
                <DataEmissao>2022-10-28T00:00:00</DataEmissao>
                <DataOp1 i:nil="true" />
                <DataOp2 i:nil="true" />
                <DataOp3 i:nil="true" />
                <DataOp4 i:nil="true" />
                <DataOp5 i:nil="true" />
                <DataVencimento>2022-10-28T00:00:00</DataVencimento>
                <DescricaoLancamento i:nil="true" />
                <Historico>COLONIA DE FERIAS - RARA NONO TAPAJOS  </Historico>
                <IdBaixa>100001</IdBaixa>
                <IdFatura i:nil="true" />
                <IdHabilitacaoFilial i:nil="true" />
                <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
                <IdLanOrigemRepasse i:nil="true" />
                <IdXCx i:nil="true" />
                <ListaBolsaEvento i:nil="true" xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
                <MesCompetencia i:nil="true" />
                <MoedaOrigem>R$</MoedaOrigem>
                <Natureza>Baixa</Natureza>
                <NumAdit>0</NumAdit>
                <NumContabil i:nil="true" />
                <NumContabilBx>${baixaSimplesLancamento.idLan}</NumContabilBx>
                <NumVenda>0</NumVenda>
                <NumeroCheque i:nil="true" />
                <NumeroDocumento>${baixaSimplesLancamento.idLan}</NumeroDocumento>
                <OwnerDataFormula z:Id="i10" i:type="b:FinItemBaixa" xmlns:b="-RM.Fin.Lan.IService, Version=12.1.33.308, Culture=neutral, PublicKeyToken=null-RM.Fin.Lan-RM.Fin.Lan.FinItemBaixa">
                  <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
                  <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
                  <AplicarDescontoTotal i:nil="true" />
                  <CampoAlfaOp1 />
                  <CampoAlfaOp2 />
                  <CampoAlfaOp3 />
                  <CampoDiferenca i:nil="true" />
                  <CamposComplementares xmlns:c="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                    <c:KeyValueOfstringanyType>
                      <c:Key>CODCOLIGADA</c:Key>
                      <c:Value i:type="d:short" xmlns:d="http://www.w3.org/2001/XMLSchema">1</c:Value>
                    </c:KeyValueOfstringanyType>
                    <c:KeyValueOfstringanyType>
                      <c:Key>IDLAN</c:Key>
                      <c:Value i:type="d:int" xmlns:d="http://www.w3.org/2001/XMLSchema">${baixaSimplesLancamento.idLan}</c:Value>
                    </c:KeyValueOfstringanyType>
                    <c:KeyValueOfstringanyType>
                      <c:Key>IDBAIXA</c:Key>
                      <c:Value i:type="d:int" xmlns:d="http://www.w3.org/2001/XMLSchema">-1</c:Value>
                    </c:KeyValueOfstringanyType>
                    <c:KeyValueOfstringanyType>
                      <c:Key>RECCREATEDBY</c:Key>
                      <c:Value i:nil="true" />
                    </c:KeyValueOfstringanyType>
                    <c:KeyValueOfstringanyType>
                      <c:Key>RECCREATEDON</c:Key>
                      <c:Value i:nil="true" />
                    </c:KeyValueOfstringanyType>
                    <c:KeyValueOfstringanyType>
                      <c:Key>RECMODIFIEDBY</c:Key>
                      <c:Value i:nil="true" />
                    </c:KeyValueOfstringanyType>
                    <c:KeyValueOfstringanyType>
                      <c:Key>RECMODIFIEDON</c:Key>
                      <c:Value i:nil="true" />
                    </c:KeyValueOfstringanyType>
                  </CamposComplementares>
                  <CodCCusto>1.04.002.015</CodCCusto>
                  <CodColCxa>1</CodColCxa>
                  <CodColXCX>0</CodColXCX>
                  <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
                  <CodCxa>PAGAR.ME</CodCxa>
                  <CodDepartamento />
                  <CodEventoBaixa i:nil="true" />
                  <CodFilial>1</CodFilial>
                  <CodTabOp1 />
                  <CodTabOp2>0017</CodTabOp2>
                  <CodTabOp3>02.001.235</CodTabOp3>
                  <CodTabOp4 />
                  <CodTabOp5>010</CodTabOp5>
                  <CompensarExtratoBaixa>NaoCompensar</CompensarExtratoBaixa>
                  <CotacaoBaixa>1</CotacaoBaixa>
                  <DataBaixa>2022-10-28T00:00:00-03:00</DataBaixa>
                  <DataCheque i:nil="true" />
                  <DataCompensacaoExtrato>0001-01-01T00:00:00</DataCompensacaoExtrato>
                  <DataContabilizBx>2022-10-28T00:00:00-03:00</DataContabilizBx>
                  <DataOp1 i:nil="true" />
                  <DataOp2 i:nil="true" />
                  <DataOp3 i:nil="true" />
                  <DataOp4 i:nil="true" />
                  <DataOp5 i:nil="true" />
                  <DataVencimentoLancamento i:nil="true" />
                  <IdBaixa>100001</IdBaixa>
                  <IdFormaPagto>62</IdFormaPagto>
                  <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
                  <IdPagto>1</IdPagto>
                  <IdParcelamento>0</IdParcelamento>
                  <IdTransacao>0</IdTransacao>
                  <IdTransacaoSiTef>0</IdTransacaoSiTef>
                  <IdXCX>0</IdXCX>
                  <ImprimirCheque>false</ImprimirCheque>
                  <LancamentoLiquido>
                    <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
                    <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
                    <OrigemValoresParaCalculoValorLiquido>
                      <OrigemValorCap>BaseDados</OrigemValorCap>
                      <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
                      <OrigemValorIntegracao>BaseDados</OrigemValorIntegracao>
                      <OrigemValorJuros>BaseDados</OrigemValorJuros>
                      <OrigemValorMulta>BaseDados</OrigemValorMulta>
                      <OrigemValorOp1>BaseDados</OrigemValorOp1>
                      <OrigemValorOp2>BaseDados</OrigemValorOp2>
                      <OrigemValorOp3>BaseDados</OrigemValorOp3>
                      <OrigemValorOp4>BaseDados</OrigemValorOp4>
                      <OrigemValorOp5>BaseDados</OrigemValorOp5>
                      <OrigemValorOp6>BaseDados</OrigemValorOp6>
                      <OrigemValorOp7>BaseDados</OrigemValorOp7>
                      <OrigemValorOp8>BaseDados</OrigemValorOp8>
                      <OrigemValoresAcordo>BaseDados</OrigemValoresAcordo>
                    </OrigemValoresParaCalculoValorLiquido>
                    <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
                    <ValorAdiantamento>0</ValorAdiantamento>
                    <ValorCap>0</ValorCap>
                    <ValorDesconto>0</ValorDesconto>
                    <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
                    <ValorDevolucao>0</ValorDevolucao>
                    <ValorINSS>0</ValorINSS>
                    <ValorIRRF>0</ValorIRRF>
                    <ValorJuros>0</ValorJuros>
                    <ValorJurosAcordo>0.0000</ValorJurosAcordo>
                    <ValorJurosVendor>0</ValorJurosVendor>
                    <ValorLiquido>${baixaSimplesLancamento.valor}</ValorLiquido>
                    <ValorMulta>0</ValorMulta>
                    <ValorNotaCredito>0</ValorNotaCredito>
                    <ValorOp1>0</ValorOp1>
                    <ValorOp2>0</ValorOp2>
                    <ValorOp3>0.0000</ValorOp3>
                    <ValorOp4>0</ValorOp4>
                    <ValorOp5>0</ValorOp5>
                    <ValorOp6>0</ValorOp6>
                    <ValorOp7>0.0000</ValorOp7>
                    <ValorOp8>0</ValorOp8>
                    <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
                    <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
                    <ValorRetencoes>0</ValorRetencoes>
                    <ValorSESTSENAT>0</ValorSESTSENAT>
                  </LancamentoLiquido>
                  <ListTributos />
                  <ListaDeExtrato />
                  <ListaValoresIntegracaoItemBaixaPar />
                  <ModeloContabilizacao>0</ModeloContabilizacao>
                  <MotivoBxProtheus i:nil="true" />
                  <NaoIncluirBaixa>false</NaoIncluirBaixa>
                  <NumEventoBaixa i:nil="true" />
                  <NumeroCheque i:nil="true" />
                  <OpcaoParcelamento>1</OpcaoParcelamento>
                  <OperacaoValorOp1>Desconta</OperacaoValorOp1>
                  <OperacaoValorOp2>Desconta</OperacaoValorOp2>
                  <OperacaoValorOp3>Nada</OperacaoValorOp3>
                  <OperacaoValorOp4>Desconta</OperacaoValorOp4>
                  <OperacaoValorOp5>Acrescenta</OperacaoValorOp5>
                  <OperacaoValorOp6>Acrescenta</OperacaoValorOp6>
                  <OperacaoValorOp7>Nada</OperacaoValorOp7>
                  <OperacaoValorOp8>Acrescenta</OperacaoValorOp8>
                  <OrigemContabilizacao>EventoContabil</OrigemContabilizacao>
                  <OrigemValorCap>BaseDados</OrigemValorCap>
                  <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
                  <OrigemValorJuros>BaseDados</OrigemValorJuros>
                  <OrigemValorMulta>BaseDados</OrigemValorMulta>
                  <OrigemValorOp1>BaseDados</OrigemValorOp1>
                  <OrigemValorOp2>BaseDados</OrigemValorOp2>
                  <OrigemValorOp3>BaseDados</OrigemValorOp3>
                  <OrigemValorOp4>BaseDados</OrigemValorOp4>
                  <OrigemValorOp5>BaseDados</OrigemValorOp5>
                  <OrigemValorOp6>BaseDados</OrigemValorOp6>
                  <OrigemValorOp7>BaseDados</OrigemValorOp7>
                  <OrigemValorOp8>BaseDados</OrigemValorOp8>
                  <OrigemValores>
                    <OrigemValorCap>BaseDados</OrigemValorCap>
                    <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
                    <OrigemValorIntegracao>BaseDados</OrigemValorIntegracao>
                    <OrigemValorJuros>BaseDados</OrigemValorJuros>
                    <OrigemValorMulta>BaseDados</OrigemValorMulta>
                    <OrigemValorOp1>BaseDados</OrigemValorOp1>
                    <OrigemValorOp2>BaseDados</OrigemValorOp2>
                    <OrigemValorOp3>BaseDados</OrigemValorOp3>
                    <OrigemValorOp4>BaseDados</OrigemValorOp4>
                    <OrigemValorOp5>BaseDados</OrigemValorOp5>
                    <OrigemValorOp6>BaseDados</OrigemValorOp6>
                    <OrigemValorOp7>BaseDados</OrigemValorOp7>
                    <OrigemValorOp8>BaseDados</OrigemValorOp8>
                    <OrigemValoresAcordo>BaseDados</OrigemValoresAcordo>
                  </OrigemValores>
                  <PagRec>Receber</PagRec>
                  <RateiosCCu>
                    <FinItemBaixaRatCCu z:Id="i11">
                      <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
                      <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
                      <CodCCusto>1.04.002.015</CodCCusto>
                      <CodColNatFinanceira>0</CodColNatFinanceira>
                      <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
                      <CodNatFinanceira />
                      <CodTbGrupoOrc />
                      <IdBaixa>100001</IdBaixa>
                      <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
                      <IdPrj i:nil="true" />
                      <IdRatCCu>-1</IdRatCCu>
                      <IdTrf i:nil="true" />
                      <Percentual>100</Percentual>
                      <Valor>${baixaSimplesLancamento.valor}</Valor>
                    </FinItemBaixaRatCCu>
                  </RateiosCCu>
                  <RateiosCCuLan>
                    <FinItemBaixaRatCCu z:Id="i12">
                      <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
                      <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
                      <CodCCusto>1.04.002.015</CodCCusto>
                      <CodColNatFinanceira>0</CodColNatFinanceira>
                      <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
                      <CodNatFinanceira />
                      <CodTbGrupoOrc />
                      <IdBaixa>100001</IdBaixa>
                      <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
                      <IdPrj i:nil="true" />
                      <IdRatCCu>866260</IdRatCCu>
                      <IdTrf i:nil="true" />
                      <Percentual>100</Percentual>
                      <Valor>${baixaSimplesLancamento.valor}</Valor>
                    </FinItemBaixaRatCCu>
                  </RateiosCCuLan>
                  <RateiosDepto />
                  <SequencialPagto>1</SequencialPagto>
                  <SinalOp1>(- )</SinalOp1>
                  <SinalOp2>(- )</SinalOp2>
                  <SinalOp3 />
                  <SinalOp4>(- )</SinalOp4>
                  <SinalOp5>(+)</SinalOp5>
                  <SinalOp6>(+)</SinalOp6>
                  <SinalOp7 />
                  <SinalOp8>(+)</SinalOp8>
                  <TipoDiferenca i:nil="true" />
                  <TipoFormaPagto>Cartao</TipoFormaPagto>
                  <TipoRetornoBancario>Nenhum</TipoRetornoBancario>
                  <TipoTransacao>WCF</TipoTransacao>
                  <Usuario>13912764778</Usuario>
                  <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
                  <ValorBaixa>${baixaSimplesLancamento.valor}</ValorBaixa>
                  <ValorCap>0</ValorCap>
                  <ValorDesconto>0</ValorDesconto>
                  <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
                  <ValorDescontoPontual>0</ValorDescontoPontual>
                  <ValorDevolucao>0</ValorDevolucao>
                  <ValorDiferenca i:nil="true" />
                  <ValorINSS>0</ValorINSS>
                  <ValorIRRF>0</ValorIRRF>
                  <ValorJuros>0</ValorJuros>
                  <ValorJurosAcordo>0.0000</ValorJurosAcordo>
                  <ValorJurosVendor>0.0000</ValorJurosVendor>
                  <ValorMulta>0</ValorMulta>
                  <ValorNotaCredito>0</ValorNotaCredito>
                  <ValorNotaCreditoAdiantamento>0</ValorNotaCreditoAdiantamento>
                  <ValorOp1>0</ValorOp1>
                  <ValorOp2>0</ValorOp2>
                  <ValorOp3>0.0000</ValorOp3>
                  <ValorOp4>0</ValorOp4>
                  <ValorOp5>0</ValorOp5>
                  <ValorOp6>0</ValorOp6>
                  <ValorOp7>0.0000</ValorOp7>
                  <ValorOp8>0</ValorOp8>
                  <ValorOpComSinal1>0</ValorOpComSinal1>
                  <ValorOpComSinal2>0</ValorOpComSinal2>
                  <ValorOpComSinal3>0.0000</ValorOpComSinal3>
                  <ValorOpComSinal4>0</ValorOpComSinal4>
                  <ValorOpComSinal5>0</ValorOpComSinal5>
                  <ValorOpComSinal6>0</ValorOpComSinal6>
                  <ValorOpComSinal7>0.0000</ValorOpComSinal7>
                  <ValorOpComSinal8>0</ValorOpComSinal8>
                  <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
                  <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
                  <ValorRetencoes>0</ValorRetencoes>
                  <ValorSESTSENAT>0</ValorSESTSENAT>
                  <ValorVinculado>0</ValorVinculado>
                  <contabil i:nil="true" />
                </OwnerDataFormula>
                <PagRec>Receber</PagRec>
                <RateioCCusto xmlns:b="http://www.totvs.com/">
                  <b:FinLanEventoContabilRatCCuPar z:Id="i13">
                    <b:InternalId i:nil="true" />
                    <CodCCusto>1.04.002.015</CodCCusto>
                    <CodColNatFinanceira>0</CodColNatFinanceira>
                    <CodColigada>0</CodColigada>
                    <CodNatFinanceira />
                    <CodTBGrupoOrc />
                    <IdBaixa>100001</IdBaixa>
                    <IdLan>0</IdLan>
                    <IdPrj i:nil="true" />
                    <IdRatCCu>-1</IdRatCCu>
                    <IdTrf i:nil="true" />
                    <Percentual>100</Percentual>
                    <Valor>${baixaSimplesLancamento.valor}</Valor>
                  </b:FinLanEventoContabilRatCCuPar>
                </RateioCCusto>
                <RateioCCustoLan xmlns:b="http://www.totvs.com/">
                  <b:FinLanEventoContabilRatCCuPar z:Id="i14">
                    <b:InternalId i:nil="true" />
                    <CodCCusto>1.04.002.015</CodCCusto>
                    <CodColNatFinanceira>0</CodColNatFinanceira>
                    <CodColigada>0</CodColigada>
                    <CodNatFinanceira />
                    <CodTBGrupoOrc />
                    <IdBaixa>0</IdBaixa>
                    <IdLan>0</IdLan>
                    <IdPrj i:nil="true" />
                    <IdRatCCu>866260</IdRatCCu>
                    <IdTrf i:nil="true" />
                    <Percentual>100</Percentual>
                    <Valor>${baixaSimplesLancamento.valor}</Valor>
                  </b:FinLanEventoContabilRatCCuPar>
                </RateioCCustoLan>
                <RateioDepto xmlns:b="http://www.totvs.com/" />
                <Retencao xmlns:b="http://www.totvs.com/" />
                <SegundoNumero />
                <StatusLanAposbaixa>Baixado</StatusLanAposbaixa>
                <Usuario>13912764778</Usuario>
                <ValorAdiantamento>0</ValorAdiantamento>
                <ValorBaixado>${baixaSimplesLancamento.valor}</ValorBaixado>
                <ValorDesconto>0</ValorDesconto>
                <ValorDevolucao>0</ValorDevolucao>
                <ValorINSS>0</ValorINSS>
                <ValorIRRF>0</ValorIRRF>
                <ValorJuros>0</ValorJuros>
                <ValorJurosVendor>0.0000</ValorJurosVendor>
                <ValorMulta>0</ValorMulta>
                <ValorNotaCredito>0</ValorNotaCredito>
                <ValorOp1>0</ValorOp1>
                <ValorOp2>0</ValorOp2>
                <ValorOp3>0.0000</ValorOp3>
                <ValorOp4>0</ValorOp4>
                <ValorOp5>0</ValorOp5>
                <ValorOp6>0</ValorOp6>
                <ValorOp7>0.0000</ValorOp7>
                <ValorOp8>0</ValorOp8>
                <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
                <VrPerdaFinanceira>0</VrPerdaFinanceira>
              </FinLanEventoContabilPar>
            </OwnerData>
            <PermiteAlterarLanctoLoteZero>false</PermiteAlterarLanctoLoteZero>
            <PermiteExcluirLancamento>true</PermiteExcluirLancamento>
            <PermitirManutencaoLanLoteZero>false</PermitirManutencaoLanLoteZero>
            <Processo>LancamentoFinanceiro</Processo>
            <StatusContabilizacao>C</StatusContabilizacao>
            <TipoParticipante>ClienteFornecedor</TipoParticipante>
            <UsaEventoContabil>true</UsaEventoContabil>
            <ValidaContaContabilSemRateio>false</ValidaContaContabilSemRateio>
            <ValidaUsuarioModificouContabilizacaoGeradaPeloEvento>false</ValidaUsuarioModificouContabilizacaoGeradaPeloEvento>
            <_HasFilterProc_EventoContabil>false</_HasFilterProc_EventoContabil>
          </contabil>
        </FinItemBaixa>
      </ItensBaixa>
      <Lancamentos>
        <FinLancamentoBaixaResult z:Id="i15">
          <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
          <Codigo i:nil="true" />
          <Coligada>${baixaSimplesLancamento.codColigada}</Coligada>
          <ID>${baixaSimplesLancamento.idLan}</ID>
          <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
          <IdBaixa>0</IdBaixa>
          <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
          <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
          <AlteracaoBloqueada>0</AlteracaoBloqueada>
          <Antecipado>Nenhum</Antecipado>
          <AplicarDescontoTotal>false</AplicarDescontoTotal>
          <BaixaInvaldaMsg i:nil="true" />
          <BaixaInvalida>false</BaixaInvalida>
          <BaseCalculoTributosLancamento>0</BaseCalculoTributosLancamento>
          <CGC>069.055.517-24</CGC>
          <CampoAlfaOp1 />
          <CampoAlfaOp2 />
          <CampoAlfaOp3 />
          <CapMensal>0.0000</CapMensal>
          <CarenciaJuros>0</CarenciaJuros>
          <Chapa />
          <Classificacao>SemClassificacao</Classificacao>
          <ClassificacaoFatura>SemClassificacao</ClassificacaoFatura>
          <ClassificacaoTipoDoc>SemClassificacao</ClassificacaoTipoDoc>
          <CodCCusto>1.04.002.015</CodCCusto>
          <CodCfo>00017847</CodCfo>
          <CodColCfo>0</CodColCfo>
          <CodColCxa>0</CodColCxa>
          <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
          <CodCxa />
          <CodDepartamento />
          <CodEventoAux>261</CodEventoAux>
          <CodFilial>1</CodFilial>
          <CodIndexador />
          <CodMoeda>R$</CodMoeda>
          <CodMoedaCxa />
          <CodSistema>F</CodSistema>
          <CodTb1Flx />
          <CodTb2Flx>0017</CodTb2Flx>
          <CodTb3Flx>02.001.235</CodTb3Flx>
          <CodTb4Flx />
          <CodTb5Flx>010</CodTb5Flx>
          <CodTdo>130</CodTdo>
          <ComBoletoParcial>false</ComBoletoParcial>
          <CotacaoBaixa>1</CotacaoBaixa>
          <DataBaixa>2022-10-28T00:00:00-03:00</DataBaixa>
          <DataContabilizacaoInclusao i:nil="true" />
          <DataEmissao>2022-10-28T00:00:00</DataEmissao>
          <DataLiqDuvidosa>0001-01-01T00:00:00</DataLiqDuvidosa>
          <DataOp1 i:nil="true" />
          <DataOp2 i:nil="true" />
          <DataOp3 i:nil="true" />
          <DataOp4 i:nil="true" />
          <DataOp5 i:nil="true" />
          <DataPrevBaixa>2022-10-28T00:00:00</DataPrevBaixa>
          <DataVencimento>2022-10-28T00:00:00</DataVencimento>
          <DataVencimentoAnterior>2022-10-28T00:00:00</DataVencimentoAnterior>
          <Descontado>false</Descontado>
          <FormulaCapitalizacao />
          <FormulaDesconto />
          <FormulaJuros>JLAR11</FormulaJuros>
          <FormulaMulta>JLAR10</FormulaMulta>
          <FormulaValorOp1>HSM.203</FormulaValorOp1>
          <FormulaValorOp2 />
          <FormulaValorOp3 />
          <FormulaValorOp4 />
          <FormulaValorOp5 />
          <FormulaValorOp6 />
          <FormulaValorOp7 />
          <FormulaValorOp8 />
          <Historico>COLONIA DE FERIAS - RARA NONO TAPAJOS  </Historico>
          <IdBoleto i:nil="true" />
          <IdBordero i:nil="true" />
          <IdFormaPagto i:nil="true" />
          <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
          <ImageSinalOp1 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">R0lGODlhEAAQAIcAAIQxMYwpKYwxKZQpKZwpIaUxIa0xGLUpGL0pEMYhEMYpEMbGxs4xENYpCP9zSv97Uv+EWv+MY/+Ma/+Uc/+le////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEBAAAh+QQBAAALACwAAAAAEAAQAAAITQAXCBxIsKDBgwgTKlzIsOHBBgwUJECAwICBAgUIECCogAKFCRMkSIgAAcKDAQQTfAwZgeSDBw4EEDxw4CLGAQMECAAAwKHPn0CDBg0IADs=</Data>
          </ImageSinalOp1>
          <ImageSinalOp2 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">R0lGODlhEAAQAIcAAIQxMYwpKYwxKZQpKZwpIaUxIa0xGLUpGL0pEMYhEMYpEMbGxs4xENYpCP9zSv97Uv+EWv+MY/+Ma/+Uc/+le////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEBAAAh+QQBAAALACwAAAAAEAAQAAAITQAXCBxIsKDBgwgTKlzIsOHBBgwUJECAwICBAgUIECCogAKFCRMkSIgAAcKDAQQTfAwZgeSDBw4EEDxw4CLGAQMECAAAwKHPn0CDBg0IADs=</Data>
          </ImageSinalOp2>
          <ImageSinalOp3 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvwAADr8BOAVTJAAAAA1JREFUGFdjYGBgYAAAAAUAAYoz4wAAAAAASUVORK5CYII=</Data>
          </ImageSinalOp3>
          <ImageSinalOp4 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">R0lGODlhEAAQAIcAAIQxMYwpKYwxKZQpKZwpIaUxIa0xGLUpGL0pEMYhEMYpEMbGxs4xENYpCP9zSv97Uv+EWv+MY/+Ma/+Uc/+le////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEBAAAh+QQBAAALACwAAAAAEAAQAAAITQAXCBxIsKDBgwgTKlzIsOHBBgwUJECAwICBAgUIECCogAKFCRMkSIgAAcKDAQQTfAwZgeSDBw4EEDxw4CLGAQMECAAAwKHPn0CDBg0IADs=</Data>
          </ImageSinalOp4>
          <ImageSinalOp5 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">R0lGODlhEAAQAIcAAAAAAABVAABVMzNVMwCAMwCqMzOAMzOqMwCqZjOqZgDVMzPVMwDVZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEBAAAh+QQBAAD/ACwAAAAAEAAQAAAIZgD/CRxIsKDBgwgFEghAQEDCgQIOJCDwUKCBAgkCVPwnIMEChwcFEBggMkGBAQ0XEgxwAMECiQcYHJBIcSCBBBIxYmx5AKRCkSMVTBRgYCTCmwcGbAyQQIHPhEhrPmxo4OnGqwkDAgA7</Data>
          </ImageSinalOp5>
          <ImageSinalOp6 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">R0lGODlhEAAQAIcAAAAAAABVAABVMzNVMwCAMwCqMzOAMzOqMwCqZjOqZgDVMzPVMwDVZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEBAAAh+QQBAAD/ACwAAAAAEAAQAAAIZgD/CRxIsKDBgwgFEghAQEDCgQIOJCDwUKCBAgkCVPwnIMEChwcFEBggMkGBAQ0XEgxwAMECiQcYHJBIcSCBBBIxYmx5AKRCkSMVTBRgYCTCmwcGbAyQQIHPhEhrPmxo4OnGqwkDAgA7</Data>
          </ImageSinalOp6>
          <ImageSinalOp7 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvwAADr8BOAVTJAAAAA1JREFUGFdjYGBgYAAAAAUAAYoz4wAAAAAASUVORK5CYII=</Data>
          </ImageSinalOp7>
          <ImageSinalOp8 xmlns:a="http://schemas.datacontract.org/2004/07/System.Drawing">
            <Data i:type="b:base64Binary" xmlns="" xmlns:b="http://www.w3.org/2001/XMLSchema">R0lGODlhEAAQAIcAAAAAAABVAABVMzNVMwCAMwCqMzOAMzOqMwCqZjOqZgDVMzPVMwDVZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEBAAAh+QQBAAD/ACwAAAAAEAAQAAAIZgD/CRxIsKDBgwgFEghAQEDCgQIOJCDwUKCBAgkCVPwnIMEChwcFEBggMkGBAQ0XEgxwAMECiQcYHJBIcSCBBBIxYmx5AKRCkSMVTBRgYCTCmwcGbAyQQIHPhEhrPmxo4OnGqwkDAgA7</Data>
          </ImageSinalOp8>
          <JurosDia>0.0000</JurosDia>
          <JurosVendor>0.0000</JurosVendor>
          <ListTributos xmlns:a="http://www.totvs.com/" />
          <ListaDeItemBaixa xmlns:a="http://www.totvs.com/" />
          <ListaVaLorIntegracaoLancamento xmlns:a="http://www.totvs.com/" />
          <MesdeCompetencia i:nil="true" />
          <ModoCalculoBx>Prioridade</ModoCalculoBx>
          <MultaDia>0.0000</MultaDia>
          <Nome>LUCIO TAPAJÓS GOMES</Nome>
          <NumBloqueios>Sem</NumBloqueios>
          <NumMovNuclues i:nil="true" />
          <NumeroContabilInclusao />
          <NumeroDocumento>${baixaSimplesLancamento.idLan}</NumeroDocumento>
          <OrigemValoresParaCalculoValorLiquido>
            <OrigemValorCap>BaseDados</OrigemValorCap>
            <OrigemValorDesconto>BaseDados</OrigemValorDesconto>
            <OrigemValorIntegracao>BaseDados</OrigemValorIntegracao>
            <OrigemValorJuros>BaseDados</OrigemValorJuros>
            <OrigemValorMulta>BaseDados</OrigemValorMulta>
            <OrigemValorOp1>BaseDados</OrigemValorOp1>
            <OrigemValorOp2>BaseDados</OrigemValorOp2>
            <OrigemValorOp3>BaseDados</OrigemValorOp3>
            <OrigemValorOp4>BaseDados</OrigemValorOp4>
            <OrigemValorOp5>BaseDados</OrigemValorOp5>
            <OrigemValorOp6>BaseDados</OrigemValorOp6>
            <OrigemValorOp7>BaseDados</OrigemValorOp7>
            <OrigemValorOp8>BaseDados</OrigemValorOp8>
            <OrigemValoresAcordo>BaseDados</OrigemValoresAcordo>
          </OrigemValoresParaCalculoValorLiquido>
          <PagRec>Receber</PagRec>
          <RatCCusto xmlns:a="http://www.totvs.com/">
            <a:FinLanRatCCuResult z:Id="i16">
              <a:InternalId i:nil="true" />
              <ClasseValor i:nil="true" />
              <CodCCusto>1.04.002.015</CodCCusto>
              <CodColNatFinanceira>0</CodColNatFinanceira>
              <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
              <CodNatFinanceira />
              <CodTbGrupoOrc />
              <Historico />
              <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
              <IdPrj i:nil="true" />
              <IdRatCCu>866260</IdRatCCu>
              <IdTrf i:nil="true" />
              <ItemContabil i:nil="true" />
              <Percentual>100.0000</Percentual>
              <Valor>${baixaSimplesLancamento.valor}</Valor>
            </a:FinLanRatCCuResult>
          </RatCCusto>
          <RatDepto xmlns:a="http://www.totvs.com/" />
          <RetencoesBx_IntegracaoProtheus i:nil="true" />
          <SESTSENATBx_IntegracaoProtheus i:nil="true" />
          <SegundoNumero />
          <SinalOp1>(- )</SinalOp1>
          <SinalOp2>(- )</SinalOp2>
          <SinalOp3 />
          <SinalOp4>(- )</SinalOp4>
          <SinalOp5>(+)</SinalOp5>
          <SinalOp6>(+)</SinalOp6>
          <SinalOp7 />
          <SinalOp8>(+)</SinalOp8>
          <StatusAprovacao>NaoSeAplica</StatusAprovacao>
          <StatusCNAB>NaoRemetido</StatusCNAB>
          <StatusExtrato>Nenhum</StatusExtrato>
          <StatusLan>Aberto</StatusLan>
          <StatusLiqDuvidosa>NaoDuvidosa</StatusLiqDuvidosa>
          <StatusRepasse>SemRepasse</StatusRepasse>
          <TemChequeParcial>false</TemChequeParcial>
          <TipoContabil>BaixaContabil</TipoContabil>
          <TipoDocumento z:Id="i17">
            <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
            <Classificacao>SemClassificacao</Classificacao>
            <CodCfo />
            <CodColCfo i:nil="true" />
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <CodTdo>130</CodTdo>
            <GeraNumDoc>DefinidoPeloUsuário</GeraNumDoc>
            <GerarExtCompNaBaixa>true</GerarExtCompNaBaixa>
            <NaoContabilizaBx0>false</NaoContabilizaBx0>
            <PagRec>AReceber</PagRec>
            <UsarParametrosGerais>true</UsarParametrosGerais>
          </TipoDocumento>
          <TipoJurosDia>Taxa</TipoJurosDia>
          <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
          <ValorAdiantamento>0</ValorAdiantamento>
          <ValorBaixado>0.0000</ValorBaixado>
          <ValorCap>0</ValorCap>
          <ValorCheque>0.0000</ValorCheque>
          <ValorDesconto>0</ValorDesconto>
          <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
          <ValorDescontoPontual>0</ValorDescontoPontual>
          <ValorDevolucao>0</ValorDevolucao>
          <ValorINSS>0</ValorINSS>
          <ValorIRRF>0</ValorIRRF>
          <ValorIRRF_IntegracaoProtheus i:nil="true" />
          <ValorJuros>0</ValorJuros>
          <ValorJurosAcordo>0.0000</ValorJurosAcordo>
          <ValorLimiteRetencoes>0</ValorLimiteRetencoes>
          <ValorLiquido>${baixaSimplesLancamento.valor}</ValorLiquido>
          <ValorLiquidoCalculado z:Id="i18">
            <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
            <Codigo i:nil="true" />
            <Coligada>${baixaSimplesLancamento.codColigada}</Coligada>
            <ID>${baixaSimplesLancamento.idLan}</ID>
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <IdBaixa>0</IdBaixa>
            <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
            <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <Data>0001-01-01T00:00:00</Data>
            <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
            <IdLog>0</IdLog>
            <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
            <ValorAdiantamento>0</ValorAdiantamento>
            <ValorCap>0</ValorCap>
            <ValorDesconto>0</ValorDesconto>
            <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
            <ValorDevolucao>0</ValorDevolucao>
            <ValorINSS>0</ValorINSS>
            <ValorIRRF>0</ValorIRRF>
            <ValorJuros>0</ValorJuros>
            <ValorJurosAcordo>0.0000</ValorJurosAcordo>
            <ValorJurosVendor>0</ValorJurosVendor>
            <ValorLiquido>${baixaSimplesLancamento.valor}</ValorLiquido>
            <ValorMulta>0</ValorMulta>
            <ValorNotaCredito>0</ValorNotaCredito>
            <ValorOp1>0</ValorOp1>
            <ValorOp2>0</ValorOp2>
            <ValorOp3>0.0000</ValorOp3>
            <ValorOp4>0</ValorOp4>
            <ValorOp5>0</ValorOp5>
            <ValorOp6>0</ValorOp6>
            <ValorOp7>0.0000</ValorOp7>
            <ValorOp8>0</ValorOp8>
            <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
            <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
            <ValorRetencoes>0</ValorRetencoes>
            <ValorSESTSENAT>0</ValorSESTSENAT>
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
            <Operacao>LancamentoInclusao</Operacao>
            <ValorCapCalc>Calculado</ValorCapCalc>
            <ValorDescontoCalc>Calculado</ValorDescontoCalc>
            <ValorDescontoPontualidadeCalc>Nenhum</ValorDescontoPontualidadeCalc>
            <ValorJurosCalc>Formula</ValorJurosCalc>
            <ValorMultaCalc>Formula</ValorMultaCalc>
            <ValorOp1Calc>Formula</ValorOp1Calc>
            <ValorOp2Calc>Nenhum</ValorOp2Calc>
            <ValorOp3Calc>Nenhum</ValorOp3Calc>
            <ValorOp4Calc>Nenhum</ValorOp4Calc>
            <ValorOp5Calc>Nenhum</ValorOp5Calc>
            <ValorOp6Calc>Nenhum</ValorOp6Calc>
            <ValorOp7Calc>Nenhum</ValorOp7Calc>
            <ValorOp8Calc>Nenhum</ValorOp8Calc>
          </ValorLiquidoCalculado>
          <ValorLiquidoFLogValores z:Id="i19">
            <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
            <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
            <CodColigada>0</CodColigada>
            <Data>0001-01-01T00:00:00</Data>
            <IdBaixa i:nil="true" />
            <IdLan>0</IdLan>
            <IdLog>0</IdLog>
            <ListaHistoricoValoresIntegracao />
            <Operacao>LancamentoInclusao</Operacao>
            <ValorAcrescimoAcordo>0</ValorAcrescimoAcordo>
            <ValorAdiantamento>0</ValorAdiantamento>
            <ValorCap>0</ValorCap>
            <ValorCapCalc>Nenhum</ValorCapCalc>
            <ValorDesconto>0</ValorDesconto>
            <ValorDescontoAcordo>0</ValorDescontoAcordo>
            <ValorDescontoCalc>Nenhum</ValorDescontoCalc>
            <ValorDescontoPontual>0</ValorDescontoPontual>
            <ValorDevolucao>0</ValorDevolucao>
            <ValorINSS>0</ValorINSS>
            <ValorIRRF>0</ValorIRRF>
            <ValorJuros>0</ValorJuros>
            <ValorJurosAcordo>0</ValorJurosAcordo>
            <ValorJurosVendor>0</ValorJurosVendor>
            <ValorLiquido>0</ValorLiquido>
            <ValorMulta>0</ValorMulta>
            <ValorMultaCalc>Nenhum</ValorMultaCalc>
            <ValorNotaCredito>0</ValorNotaCredito>
            <ValorOp1>0</ValorOp1>
            <ValorOp1Calc>Nenhum</ValorOp1Calc>
            <ValorOp2>0</ValorOp2>
            <ValorOp2Calc>Nenhum</ValorOp2Calc>
            <ValorOp3>0</ValorOp3>
            <ValorOp3Calc>Nenhum</ValorOp3Calc>
            <ValorOp4>0</ValorOp4>
            <ValorOp4Calc>Nenhum</ValorOp4Calc>
            <ValorOp5>0</ValorOp5>
            <ValorOp5Calc>Nenhum</ValorOp5Calc>
            <ValorOp6>0</ValorOp6>
            <ValorOp6Calc>Nenhum</ValorOp6Calc>
            <ValorOp7>0</ValorOp7>
            <ValorOp7Calc>Nenhum</ValorOp7Calc>
            <ValorOp8>0</ValorOp8>
            <ValorOp8Calc>Nenhum</ValorOp8Calc>
            <ValorOriginal>0</ValorOriginal>
            <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
            <ValorRetencoes>0</ValorRetencoes>
            <ValorSESTSENAT>0</ValorSESTSENAT>
          </ValorLiquidoFLogValores>
          <ValorLiquidoParcial>${baixaSimplesLancamento.valor}</ValorLiquidoParcial>
          <ValorMulta>0</ValorMulta>
          <ValorNotaCredito>0</ValorNotaCredito>
          <ValorOp1>0</ValorOp1>
          <ValorOp2>0</ValorOp2>
          <ValorOp3>0.0000</ValorOp3>
          <ValorOp4>0</ValorOp4>
          <ValorOp5>0</ValorOp5>
          <ValorOp6>0</ValorOp6>
          <ValorOp7>0.0000</ValorOp7>
          <ValorOp8>0</ValorOp8>
          <ValorOpComSinal1>0</ValorOpComSinal1>
          <ValorOpComSinal2>0</ValorOpComSinal2>
          <ValorOpComSinal3>0.0000</ValorOpComSinal3>
          <ValorOpComSinal4>0</ValorOpComSinal4>
          <ValorOpComSinal5>0</ValorOpComSinal5>
          <ValorOpComSinal6>0</ValorOpComSinal6>
          <ValorOpComSinal7>0.0000</ValorOpComSinal7>
          <ValorOpComSinal8>0</ValorOpComSinal8>
          <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
          <ValorOriginalIndexado>${baixaSimplesLancamento.valor}</ValorOriginalIndexado>
          <ValorRetencoes>0</ValorRetencoes>
          <ValorSESTSENAT>0</ValorSESTSENAT>
          <ValorVinculado>0</ValorVinculado>
          <ValordaBaixadoLancto>${baixaSimplesLancamento.valor}</ValordaBaixadoLancto>
          <Valores z:Id="i20">
            <InternalId i:nil="true" xmlns="http://www.totvs.com/" />
            <Codigo i:nil="true" />
            <Coligada>${baixaSimplesLancamento.codColigada}</Coligada>
            <ID>${baixaSimplesLancamento.idLan}</ID>
            <CodColigada>${baixaSimplesLancamento.codColigada}</CodColigada>
            <IdBaixa>0</IdBaixa>
            <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
            <ServicoAlteracaoRepasse>false</ServicoAlteracaoRepasse>
            <ValorAcrescimoAcordo>0.0000</ValorAcrescimoAcordo>
            <ValorAdiantamento>0</ValorAdiantamento>
            <ValorCap>0</ValorCap>
            <ValorDesconto>0</ValorDesconto>
            <ValorDescontoAcordo>0.0000</ValorDescontoAcordo>
            <ValorDescontoPontual>0</ValorDescontoPontual>
            <ValorDevolucao>0</ValorDevolucao>
            <ValorINSS>0</ValorINSS>
            <ValorIRRF>0</ValorIRRF>
            <ValorJuros>0</ValorJuros>
            <ValorJurosAcordo>0.0000</ValorJurosAcordo>
            <ValorJurosVendor>0</ValorJurosVendor>
            <ValorLiquido>${baixaSimplesLancamento.valor}</ValorLiquido>
            <ValorMulta>0</ValorMulta>
            <ValorNotaCredito>0</ValorNotaCredito>
            <ValorOp1>0</ValorOp1>
            <ValorOp2>0</ValorOp2>
            <ValorOp3>0.0000</ValorOp3>
            <ValorOp4>0</ValorOp4>
            <ValorOp5>0</ValorOp5>
            <ValorOp6>0</ValorOp6>
            <ValorOp7>0.0000</ValorOp7>
            <ValorOp8>0</ValorOp8>
            <ValorOriginal>${baixaSimplesLancamento.valor}</ValorOriginal>
            <ValorPerdaFinanceira>0</ValorPerdaFinanceira>
            <ValorRetencoes>0</ValorRetencoes>
            <ValorSESTSENAT>0</ValorSESTSENAT>
            <ValordaBaixadoLancto>${baixaSimplesLancamento.valor}</ValordaBaixadoLancto>
          </Valores>
        </FinLancamentoBaixaResult>
      </Lancamentos>
      <ListBaixaGeradas />
      <ListContabilLan />
      <ListaBaixas />
      <ListaIdBoletoBaixa i:nil="true" />
      <MotivoBxProtheus i:nil="true" />
      <MudouData>false</MudouData>
      <MudouMoeda>false</MudouMoeda>
      <MudouTipoBaixa>false</MudouTipoBaixa>
      <MudouTipoExtrato>false</MudouTipoExtrato>
      <NSUTransacaoPIX i:nil="true" />
      <NaoVisualizarValoresEContabilidade>false</NaoVisualizarValoresEContabilidade>
      <NumDocExtrato />
      <OrigemContabilizacao>EventoContabil</OrigemContabilizacao>
      <PagtoPorLan>
        <FinPagtoLanParamsProc z:Id="i21">
          <CodFormaPagto i:nil="true" />
          <IdFormaPagto>62</IdFormaPagto>
          <IdLan>${baixaSimplesLancamento.idLan}</IdLan>
          <IdPagto>1</IdPagto>
          <IdParcela>1</IdParcela>
          <Valor>${baixaSimplesLancamento.valor}</Valor>
        </FinPagtoLanParamsProc>
      </PagtoPorLan>
      <ReajusteParcelaTIN>DataBaixa</ReajusteParcelaTIN>
      <RetencoesAcumuladas />
      <RetencoesAcumuladasRateio />
      <TIDTransacaoPIX i:nil="true" />
      <TipoBaixa>Completa</TipoBaixa>
      <TransacoesSiTef />
      <Troco>0</Troco>
      <UsarDataBaixaReajuste>true</UsarDataBaixaReajuste>
      <Usuario>13912764778</Usuario>
      <ValidaOrcExcedido>false</ValidaOrcExcedido>
      <_usarDataVencimentoBaixa>false</_usarDataVencimentoBaixa>
    </FinLanBaixaParamsProc>]]>`;

    const createData = await this.wsSoap.executaExecuteWithXmlParamsProcess({
      ProcessServerName: 'FinLanBaixaData',
      strXmlParams: xml,
    });

    return createData;
  }

  async gerarBoletoAgrupado(gerarBoletoAgrupado: any) {
    const xml = `<![CDATA[<?xml version="1.0" encoding="utf-16"?>
    <EduGeraLancParamsProc z:Id="i1" xmlns="http://www.totvs.com.br/RM/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/">
      <ActionModule xmlns="http://www.totvs.com/">S</ActionModule>
      <ActionName xmlns="http://www.totvs.com/">EduGeraLancAction</ActionName>
      <CanParallelize xmlns="http://www.totvs.com/">true</CanParallelize>
      <CanSendMail xmlns="http://www.totvs.com/">false</CanSendMail>
      <CanWaitSchedule xmlns="http://www.totvs.com/">false</CanWaitSchedule>
      <CodUsuario xmlns="http://www.totvs.com/">${process.env.SOAP_USER}</CodUsuario>
      <ConnectionId i:nil="true" xmlns="http://www.totvs.com/" />
      <ConnectionString i:nil="true" xmlns="http://www.totvs.com/" />
      <Context z:Id="i2" xmlns="http://www.totvs.com/" xmlns:a="http://www.totvs.com.br/RM/">
        <a:_params xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$EXERCICIOFISCAL</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODLOCPRT</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODTIPOCURSO</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$EDUTIPOUSR</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUNIDADEBIB</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODCOLIGADA</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">${gerarBoletoAgrupado.codColigada}</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$RHTIPOUSR</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODIGOEXTERNO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODSISTEMA</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">S</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUSUARIOSERVICO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema" />
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUSUARIO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">${process.env.SOAP_USER}</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$IDPRJ</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CHAPAFUNCIONARIO</b:Key>
            <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>
          </b:KeyValueOfanyTypeanyType>
          <b:KeyValueOfanyTypeanyType>
            <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODFILIAL</b:Key>
            <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">${gerarBoletoAgrupado.codFilial}</b:Value>
          </b:KeyValueOfanyTypeanyType>
        </a:_params>
        <a:Environment>DotNet</a:Environment>
      </Context>
      <CustomData i:nil="true" xmlns="http://www.totvs.com/" />
      <DisableIsolateProcess xmlns="http://www.totvs.com/">false</DisableIsolateProcess>
      <DriverType i:nil="true" xmlns="http://www.totvs.com/" />
      <ExecutionId xmlns="http://www.totvs.com/">a4a27ada-a3ae-4c88-ad95-e4e94c3ce400</ExecutionId>
      <FailureMessage xmlns="http://www.totvs.com/">Falha na execução do processo</FailureMessage>
      <FriendlyLogs i:nil="true" xmlns="http://www.totvs.com/" />
      <HideProgressDialog xmlns="http://www.totvs.com/">false</HideProgressDialog>
      <HostName xmlns="http://www.totvs.com/">CEL-TS-TESTE</HostName>
      <Initialized xmlns="http://www.totvs.com/">true</Initialized>
      <Ip xmlns="http://www.totvs.com/">10.10.253.193</Ip>
      <IsolateProcess xmlns="http://www.totvs.com/">false</IsolateProcess>
      <JobServerHostName xmlns="http://www.totvs.com/">CEL-APP-TESTE</JobServerHostName>
      <MasterActionName i:nil="true" xmlns="http://www.totvs.com/" />
      <MaximumQuantityOfPrimaryKeysPerProcess xmlns="http://www.totvs.com/">1000</MaximumQuantityOfPrimaryKeysPerProcess>
      <MinimumQuantityOfPrimaryKeysPerProcess xmlns="http://www.totvs.com/">1</MinimumQuantityOfPrimaryKeysPerProcess>
      <NetworkUser xmlns="http://www.totvs.com/">wellington</NetworkUser>
      <NotifyEmail xmlns="http://www.totvs.com/">false</NotifyEmail>
      <NotifyEmailList i:nil="true" xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
      <NotifyFluig xmlns="http://www.totvs.com/">false</NotifyFluig>
      <OnlineMode xmlns="http://www.totvs.com/">false</OnlineMode>
      <PrimaryKeyList xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
      <PrimaryKeyNames i:nil="true" xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
      <PrimaryKeyTableName i:nil="true" xmlns="http://www.totvs.com/" />
      <ProcessName xmlns="http://www.totvs.com/">Gerar lançamentos</ProcessName>
      <QuantityOfSplits xmlns="http://www.totvs.com/">0</QuantityOfSplits>
      <SaveLogInDatabase xmlns="http://www.totvs.com/">true</SaveLogInDatabase>
      <SaveParamsExecution xmlns="http://www.totvs.com/">false</SaveParamsExecution>
      <ScheduleDateTime xmlns="http://www.totvs.com/">2022-09-12T15:03:46.419088-03:00</ScheduleDateTime>
      <Scheduler xmlns="http://www.totvs.com/">JobMonitor</Scheduler>
      <SendMail xmlns="http://www.totvs.com/">false</SendMail>
      <ServerName xmlns="http://www.totvs.com/">EduGeraLancData</ServerName>
      <ServiceInterface i:type="b:RuntimeType" z:FactoryType="c:UnitySerializationHolder" xmlns="http://www.totvs.com/" xmlns:a="http://schemas.datacontract.org/2004/07/System" xmlns:b="-mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089-System-System.RuntimeType" xmlns:c="-mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089-System-System.UnitySerializationHolder">
        <Data i:type="d:string" xmlns="" xmlns:d="http://www.w3.org/2001/XMLSchema">RM.Edu.Interfaces.IEduGeraLanc</Data>
        <UnityType i:type="d:int" xmlns="" xmlns:d="http://www.w3.org/2001/XMLSchema">4</UnityType>
        <AssemblyName i:type="d:string" xmlns="" xmlns:d="http://www.w3.org/2001/XMLSchema">RM.Edu.Interfaces.Intf, Version=12.1.33.289, Culture=neutral, PublicKeyToken=null</AssemblyName>
      </ServiceInterface>
      <ShouldParallelize xmlns="http://www.totvs.com/">false</ShouldParallelize>
      <ShowReExecuteButton xmlns="http://www.totvs.com/">true</ShowReExecuteButton>
      <StatusMessage i:nil="true" xmlns="http://www.totvs.com/" />
      <SuccessMessage xmlns="http://www.totvs.com/">Processo executado com sucesso</SuccessMessage>
      <SyncExecution xmlns="http://www.totvs.com/">false</SyncExecution>
      <UseJobMonitor xmlns="http://www.totvs.com/">true</UseJobMonitor>
      <UserName xmlns="http://www.totvs.com/">${process.env.SOAP_USER}</UserName>
      <WaitSchedule xmlns="http://www.totvs.com/">false</WaitSchedule>
      <ClausulasFiltroRa i:nil="true" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
      <CodCurso i:nil="true" />
      <CodGrade i:nil="true" />
      <CodHabilitacao i:nil="true" />
      <CodSentencaSql i:nil="true" />
      <CodTurma i:nil="true" />
      <CodTurno>0</CodTurno>
      <IsExcluirPrevia>false</IsExcluirPrevia>
      <IsProcGeraPrevia>false</IsProcGeraPrevia>
      <ParamsGeraLanc z:Id="i3">
        <AgrupaBolentroDeOutrasFiliais>false</AgrupaBolentroDeOutrasFiliais>
        <AgrupamentoBoleto>Aluno</AgrupamentoBoleto>
        <BoletoPorServico>Nao</BoletoPorServico>
        <CampoAlfaOp1 i:nil="true" />
        <CampoAlfaOp2 i:nil="true" />
        <CampoAlfaOp3 i:nil="true" />
        <CnabCarteira i:nil="true" />
        <CodCCusto i:nil="true" />
        <CodCfo i:nil="true" />
        <CodColCfo>0</CodColCfo>
        <CodColCxa>0</CodColCxa>
        <CodColCxaAPagar i:nil="true" />
        <CodColNatFinanceira i:nil="true" />
        <CodColigada>${gerarBoletoAgrupado.codColigada}</CodColigada>
        <CodColigadaConta>0</CodColigadaConta>
        <CodContrato i:nil="true" />
        <CodCxa />
        <CodCxaAPagar i:nil="true" />
        <CodDepto i:nil="true" />
        <CodEvento i:nil="true" />
        <CodFilial>${gerarBoletoAgrupado.codFilial}</CodFilial>
        <CodMoeda>R$</CodMoeda>
        <CodNatFinanceira i:nil="true" />
        <CodPlanoPgto i:nil="true" />
        <CodStatusMatriculaDisc>0</CodStatusMatriculaDisc>
        <CodTabOp1 i:nil="true" />
        <CodTabOp2 i:nil="true" />
        <CodTabOp3 i:nil="true" />
        <CodTabOp4 i:nil="true" />
        <CodTabOp5 i:nil="true" />
        <CodTipoCurso>1</CodTipoCurso>
        <CodTipoDocumento />
        <CodTipoDocumentoAPagar i:nil="true" />
        <CodUsuario>${process.env.SOAP_USER}</CodUsuario>
        <ConsideraDescAntecipacao>S</ConsideraDescAntecipacao>
        <ConsideraDescAntecipacaoBolsa>N</ConsideraDescAntecipacaoBolsa>
        <ContratoHabNull>Sim</ContratoHabNull>
        <CotaFinal i:nil="true" />
        <CotaInicial i:nil="true" />
        <DataCompetencia i:nil="true" />
        <DataFinal>2023-01-30T00:00:00</DataFinal>
        <DataInicial>2023-01-30T00:00:00</DataInicial>
        <DataOp1 i:nil="true" />
        <DataOp2 i:nil="true" />
        <DataOp3 i:nil="true" />
        <DataOp4 i:nil="true" />
        <DataOp5 i:nil="true" />
        <DataVencimento>0001-01-01T00:00:00</DataVencimento>
        <Historico>[SRV.D] - [ALU.C] - [ALU.D] - [CUR.D] - Parcela [PAR.C] / Cota [COT.C]</Historico>
        <IncluirExcluirBolsaRetroativa>Inclusao</IncluirExcluirBolsaRetroativa>
        <IsBolsaRetroativaModAntigo_NaoReGerarBoleto>false</IsBolsaRetroativaModAntigo_NaoReGerarBoleto>
        <IsGeracaoPreviaLancamento>false</IsGeracaoPreviaLancamento>
        <IsIncluirExcluirBolsaRetroativa>false</IsIncluirExcluirBolsaRetroativa>
        <IsPlanoPagamentoDefault>false</IsPlanoPagamentoDefault>
        <IsSimulaLancamento>false</IsSimulaLancamento>
        <ListaAlunos xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <a:string>${gerarBoletoAgrupado.ra}</a:string>
        </ListaAlunos>
        <ListaContaCorrente />
        <ListaHabilitacaoFilial xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <a:string>225</a:string>
        </ListaHabilitacaoFilial>
        <ListaIdParcela xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
        <ListaIdTurmaDisc xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
        <ListaPeriodoLetivo xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <a:string>12</a:string>
        </ListaPeriodoLetivo>
        <ListaPlanosPgto xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <a:string>02.05.01.2</a:string>
          <a:string>23.03.01.1</a:string>
        </ListaPlanosPgto>
        <ListaServicos xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <a:string>136</a:string>
          <a:string>149</a:string>
        </ListaServicos>
        <ListaTipoContrato xmlns:a="http://schemas.datacontract.org/2004/07/RM.Edu.Consts">
          <a:EduTipoContratoEnum>Plano</a:EduTipoContratoEnum>
          <a:EduTipoContratoEnum>Servico</a:EduTipoContratoEnum>
          <a:EduTipoContratoEnum>Acordo</a:EduTipoContratoEnum>
        </ListaTipoContrato>
        <ListaTipoParcela xmlns:a="http://schemas.datacontract.org/2004/07/RM.Edu.Consts">
          <a:EduTipoParcelaEnum>Plano</a:EduTipoParcelaEnum>
          <a:EduTipoParcelaEnum>Adicional</a:EduTipoParcelaEnum>
          <a:EduTipoParcelaEnum>Extra</a:EduTipoParcelaEnum>
        </ListaTipoParcela>
        <MatriculaOnlineContextoParams i:nil="true" />
        <NroConta i:nil="true" />
        <NumAgencia i:nil="true" />
        <NumAgenciaAPagar i:nil="true" />
        <NumBanco i:nil="true" />
        <NumBancoAPagar i:nil="true" />
        <OperacaoBolsaRetroativa i:nil="true" />
        <OrigemParcela i:nil="true" />
        <OrigemSimulacaoIsBolsaRetroativa>false</OrigemSimulacaoIsBolsaRetroativa>
        <ParcelaFinal i:nil="true" />
        <ParcelaInicial i:nil="true" />
        <PermiteAtualizarContaCorrente>true</PermiteAtualizarContaCorrente>
        <ProcessaDescAntecipacaoDuranteGerPrevia>Sim</ProcessaDescAntecipacaoDuranteGerPrevia>
        <TipoBolsaContrato>S</TipoBolsaContrato>
        <TipoCalculoPorCredito>Default</TipoCalculoPorCredito>
        <TipoCob i:nil="true" />
        <TipoContaCaixa i:nil="true" />
        <TipoContabilLan>NaoContabil</TipoContabilLan>
        <TipoContabilLanAPagar i:nil="true" />
        <TipoSelecaoParcela>Data</TipoSelecaoParcela>
        <ValorBolsaRetroativa>0</ValorBolsaRetroativa>
        <ValorOriginal>0</ValorOriginal>
      </ParamsGeraLanc>
      <RA>${gerarBoletoAgrupado.ra}</RA>
      <SalvarParams>false</SalvarParams>
      <TipoFiltro>RA</TipoFiltro>
      <ValorParamsConsultaSql i:nil="true" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />
    </EduGeraLancParamsProc>]]>`;

    const createData = await this.wsSoap.executaExecuteWithXmlParamsProcess({
      ProcessServerName: 'EduGeraLancData',
      strXmlParams: xml,
    });

    return createData;
  }
}
