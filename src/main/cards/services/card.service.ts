import { Card } from "../dtos/Card.model";
import { CardDTO } from "../dtos/CardDTO";

export interface CardServiceInterface {

    getCards(): Promise<Card[]>;

    getCardById(id: number): Promise<CardDTO>;
    
    saveCard(card: Card);
    
    updateCard(id: number, card: Card);

    deleteCard(id: number);
}
