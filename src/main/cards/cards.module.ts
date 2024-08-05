import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from './entity/Card.entity';
import { CardsServiceImpl } from './services/cardsImpl.service';
import { CardsController } from './controller/cards.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CardsServiceImpl],
  controllers: [CardsController],
})
export class CardsModule {}
