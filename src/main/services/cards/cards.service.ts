import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from 'src/main/entities/Card.entity';
import { Card } from 'src/shared/models/Card.model';
import { MessageHandler } from 'src/shared/utils/message-handler';
import { QueryFailedError, Repository } from 'typeorm';
import { CardDTO } from './dtos/CardDTO';

@Injectable()
export class CardsService {
    constructor(@InjectRepository(CardEntity) private repository: Repository<CardEntity>){}

    public async getCards(): Promise<Card[]> {
      const cards = await this.repository
      .createQueryBuilder('c')
      .where('c.active = :active', { active: 1 }) 
      .getMany();

      return cards.map(card => ({
        href: card.href,
        title: card.title,
        body: card.body,
      }));
    }

    public async getCardById(id: number): Promise<CardDTO> {
      const card = await this.repository.findOneBy({ id });
      if (card) return new CardDTO(card);
      
      throw new HttpException('Erro ao buscar o card.', HttpStatus.NOT_FOUND);
    }
    
    async saveCard(card: Card): Promise<CardDTO> {
      try {
        card.active = true;
        return await this.repository.save(card);
      } catch (error) {
        if (error instanceof QueryFailedError) {
          const errorMessage = MessageHandler.handleMessage('card', error);
          throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
        } else {
          throw new HttpException('Erro interno ao salvar o card.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    }

    async updateCard(id: number, card: Card): Promise<CardDTO> {
      try {
        card.active = true;
        await this.repository.update(id, card);
        return await this.getCardById(id);
      } catch (error) {
        if (error instanceof QueryFailedError) {
          const errorMessage = MessageHandler.handleMessage('card', error);
          throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
        } else {
          throw new HttpException('Erro interno ao atualizar o card.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    }

    public async deleteCard(id: number): Promise<void> {
        await this.repository.update(id, { active: false });
    }
}
