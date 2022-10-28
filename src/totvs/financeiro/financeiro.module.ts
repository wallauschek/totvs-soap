import { Module } from '@nestjs/common';
import { FinanceiroService } from './financeiro.service';
import { FinanceiroController } from './financeiro.controller';
import { WsSoapModule } from '../wsSoap/wsSoap.module';

@Module({
  imports: [WsSoapModule],
  controllers: [FinanceiroController],
  providers: [FinanceiroService],
})
export class FinanceiroModule {}
