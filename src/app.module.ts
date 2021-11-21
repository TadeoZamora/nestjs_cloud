import { UsuarioModule } from './api/usuario/usuario.module';
import { UsuarioController } from './api/usuario/usuario.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),UsuarioModule,],
  providers: [ AppService ],
})
export class AppModule { }
