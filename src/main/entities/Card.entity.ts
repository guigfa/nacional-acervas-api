import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Cards')
export class CardEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() href: string;
    @Column() title: string;
    @Column() body: string;
    @Column() active: boolean;
}