import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CardsServiceImpl } from '../services/cardsImpl.service';
import { Card } from '../dtos/Card.model';

@Controller('cards')
export class CardsController {

    constructor(private service: CardsServiceImpl) {}

    @Get()
    @HttpCode(200)
    public getCards(): Promise<Card[]> {
        return this.service.getCards();
    };

    @Get(':id')
    @HttpCode(200)
    public getCard(@Param('id') id: number): Promise<Card> {
        return this.service.getCardById(id);
    };

    @Post()
    @HttpCode(201)
    public save(@Body() card: Card): Promise<Card> {
        return this.service.saveCard(card);
    };

    @Put(':id')
    @HttpCode(200)
    public update(@Param('id') id: number, @Body() card: Card): Promise<Card> {
        return this.service.updateCard(id, card);
    };

    @Delete(":id")
    @HttpCode(204)
    public delete(@Param('id') id: number): Promise<void> {
        return this.service.deleteCard(id);
    };

}
