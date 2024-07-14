import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from '../entities/Card.entity';
import { CardsService } from '../services/cards/cards.service';
import { CardsController } from '../controllers/cards/cards.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CardsService],
  controllers: [CardsController],
})
export class CardsModule {}
