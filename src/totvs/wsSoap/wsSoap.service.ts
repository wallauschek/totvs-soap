import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';
import { XMLParser } from 'fast-xml-parser';

import { wsSoapDTO, wsDataServerDTO } from './dto/wsSoap.dto';

@Injectable()
export class WsSoapService {
  constructor(
    @Inject('wsSoapSQL') private readonly mySoapClient: Client,
    @Inject('wsDataServer') private readonly mySoapDataServerClient: Client,
  ) {}

  executaSql({ codcoligada, consulta, parametros }: wsSoapDTO) {
    const parser = new XMLParser({
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
      },
    });
    const args = {
      codSentenca: consulta,
      codColigada: codcoligada,
      codAplicacao: 'S',
      Usuario: process.env.SOAP_USER,
      Senha: process.env.SOAP_PASSWORD,
      parameters: parametros,
    };
    return this.mySoapClient
      .RealizarSoapSQLAuthAsync(args)
      .then((result: any) => {
        return parser.parse(result[0].RealizarSoapSQLAuthResult).NewDataSet
          .Resultado;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
  }
  async executaReadRecordDataServer({
    DataServerName,
    PrimaryKey,
    Contexto,
  }: wsDataServerDTO) {
    const parser = new XMLParser({
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
      },
    });
    const args = {
      Usuario: process.env.SOAP_USER,
      Senha: process.env.SOAP_PASSWORD,
      DataServerName,
      PrimaryKey,
      Contexto,
    };
    const dataserver = await this.mySoapDataServerClient
      .ReadRecordAuthAsync(args)
      .then((result: any) => {
        // console.log(result[0].ReadRecordResult);
        // return result;
        return parser.parse(result[0].ReadRecordAuthResult).FinLAN; //.NewDataSet.Resultado;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
    return dataserver;
  }
  async executaSaveRecordDataServer({
    DataServerName,
    XML,
    Contexto,
  }: wsDataServerDTO) {
    const args = {
      Usuario: process.env.SOAP_USER,
      Senha: process.env.SOAP_PASSWORD,
      DataServerName,
      XML: XML?.toString().replace(/(\r\n|\n|\r)/gm, ''),
      Contexto,
    };

    const dataserver = await this.mySoapDataServerClient
      .SaveRecordAuthAsync(args)
      .then((result: any) => {
        console.log(result);
        return result[0].SaveRecordAuthResult;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
    return dataserver;
  }
}
