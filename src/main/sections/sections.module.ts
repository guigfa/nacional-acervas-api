import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsService } from './services/sections.service';
import { SectionsController } from './controllers/sections.controller';
import { Sections } from './entity/Section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sections])],
  providers: [SectionsService],
  controllers: [SectionsController],
})
export class SectionsModule {}
