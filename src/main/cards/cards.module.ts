import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entity/Card.entity';
import { CardsService } from './services/cards.service';
import { CardsController } from './controller/cards.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CardsService],
  controllers: [CardsController],
})
export class CardsModule {}
