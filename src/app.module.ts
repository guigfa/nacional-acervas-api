import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './main/cards/cards.module';
import { CardEntity } from './main/cards/entity/Card.entity';
import { SectionsModule } from './main/sections/sections.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'YourStrong!Passw0rd',
      database: 'master',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: true, // Se SSL/TLS está habilitado no SQL Server
        trustServerCertificate: true, // Ignora a validação do certificado
      },
    }),
    CardsModule,
    SectionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
