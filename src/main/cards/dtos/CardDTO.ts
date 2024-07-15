export class CardDTO {
    href: string;
    title: string;
    body: string;

    constructor(partial: Partial<CardDTO>) {
        Object.assign(this, partial);
      }
}