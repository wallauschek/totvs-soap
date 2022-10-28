import { Body, Controller, Post } from '@nestjs/common';
import { wsSoapDTO, wsDataServerDTO } from './dto/wsSoap.dto';
import { WsSoapService } from './wsSoap.service';

@Controller('totvs/ws')
export class WsSoapController {
  constructor(private readonly wsSoapService: WsSoapService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('consulta')
  create(@Body() dto: wsSoapDTO) {
    return this.wsSoapService.executaSql(dto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('readrecord')
  readRecord(@Body() dto: wsDataServerDTO) {
    return this.wsSoapService.executaReadRecordDataServer(dto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('saverecord')
  saveRecord(@Body() dto: wsDataServerDTO) {
    return this.wsSoapService.executaSaveRecordDataServer(dto);
  }
}
