import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsService } from '../services/sections/sections.service';
import { SectionsController } from '../controllers/sections/sections.controller';
import { Sections } from '../entities/Section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sections])],
  providers: [SectionsService],
  controllers: [SectionsController],
})
export class SectionsModule {}
