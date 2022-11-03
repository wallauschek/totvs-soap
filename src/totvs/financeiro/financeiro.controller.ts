import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { FinanceiroService } from './financeiro.service';
import {
  CreateBaixaSimplesDataDto,
  CreateFinLanDataBRDto,
} from './dto/create-financeiro.dto';

@Controller('totvs/soap/financeiro')
export class FinanceiroController {
  constructor(private readonly financeiroService: FinanceiroService) {}

  @Post('dataServer/finLanDataBR')
  createFinLanDataBR(@Body() createFinLanData: CreateFinLanDataBRDto) {
    return this.financeiroService.createFinLanDataBR(createFinLanData);
  }

  @Get('dataServer/finLanDataBR/:coligada/:idLancamento')
  findOneFinLanDataBR(
    @Param('coligada') coligada: number,
    @Param('idLancamento') idLancamento: number,
  ) {
    return this.financeiroService.findOneFinLanDataBR(+coligada, +idLancamento);
  }

  @Post('wsProcess/baixaSimples')
  createBaixaSimples(
    @Body() createBaixaSimplesData: CreateBaixaSimplesDataDto,
  ) {
    return this.financeiroService.baixaSimplesLancamento(
      createBaixaSimplesData,
    );
  }
}
