import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SoapModule } from 'nestjs-soap';

import { WsSoapController } from './wsSoap.controller';
import { WsSoapService } from './wsSoap.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SoapModule.register({
      clientName: 'wsSoapSQL',
      uri: `${process.env.SOAP_URL}/wsConsultaSQL.asmx?wsdl`,
      auth: {
        type: 'basic',
        username: process.env.SOAP_USER as string,
        password: process.env.SOAP_PASSWORD as string,
      },
    }),
    SoapModule.register({
      clientName: 'wsDataServer',
      uri: `${process.env.SOAP_URL}/wsDataServer.asmx?wsdl`,
      auth: {
        type: 'basic',
        username: process.env.SOAP_USER as string,
        password: process.env.SOAP_PASSWORD as string,
      },
    }),
    SoapModule.register({
      clientName: 'wsProcess',
      uri: `${process.env.SOAP_URL}/wsProcess.asmx?wsdl`,
      auth: {
        type: 'basic',
        username: process.env.SOAP_USER as string,
        password: process.env.SOAP_PASSWORD as string,
      },
    }),
  ],
  controllers: [WsSoapController],
  providers: [WsSoapService],
  exports: [WsSoapService],
})
export class WsSoapModule {}
