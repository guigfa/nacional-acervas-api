import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Sections')
export class Sections {
    @PrimaryColumn({ type: 'nvarchar' }) id: string;
    @Column() title: string;
    @Column() position: string;
    @Column() img: string;
    @Column() text: string;
    @Column() href: string;
    @Column() btnText: string;
}