import { UsuarioModule } from './api/usuario/usuario.module';
import { UsuarioController } from './api/usuario/usuario.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaModule } from './api/cita/cita.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),UsuarioModule, CitaModule],
  providers: [ AppService ],
})
export class AppModule { }
