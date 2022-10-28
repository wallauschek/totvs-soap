import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WsSoapModule } from './totvs/wsSoap/wsSoap.module';

@Module({
  imports: [
    //importar o modulo wsSoap
    WsSoapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
