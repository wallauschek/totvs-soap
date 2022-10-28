import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { FinanceiroService } from './financeiro.service';
import { CreateFinLanDataBRDto } from './dto/create-financeiro.dto';

@Controller('totvs/soap/dataServer/financeiro')
export class FinanceiroController {
  constructor(private readonly financeiroService: FinanceiroService) {}

  @Post('finLanDataBR')
  create(@Body() createFinLanData: CreateFinLanDataBRDto) {
    return this.financeiroService.create(createFinLanData);
  }

  @Get('finLanDataBR/:coligada/:idLancamento')
  findOne(
    @Param('coligada') coligada: number,
    @Param('idLancamento') idLancamento: number,
  ) {
    return this.financeiroService.findOne(+coligada, +idLancamento);
  }
}
