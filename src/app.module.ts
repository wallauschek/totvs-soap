import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceiroModule } from './totvs/financeiro/financeiro.module';
import { WsSoapModule } from './totvs/wsSoap/wsSoap.module';

@Module({
  imports: [WsSoapModule, FinanceiroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
