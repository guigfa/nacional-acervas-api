import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from "@nestjs/common";
import { SectionsService } from "src/main/services/sections/sections.service";
import { MessageHandler } from "src/shared/utils/message-handler";
import { QueryFailedError } from "typeorm";

@Controller('sections')
export class SectionsController {
    constructor(private service: SectionsService) { }

    @Get()
    @HttpCode(200)
    public getSections(): Promise<Section[]> {
        return this.service.getSections();
    };

    @Post()
    @HttpCode(201)
    public save(@Body() section: Section): Promise<Section> {
        try {
            section.active = true;
            return this.service.saveSection(section);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                const errorMessage = MessageHandler.handleMessage('card', error);
                throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Erro interno ao salvar o card.', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
    }
}