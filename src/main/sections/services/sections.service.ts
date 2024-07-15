import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sections } from "../entity/Section.entity";

@Injectable()
export class SectionsService {
    constructor(@InjectRepository(Sections) private repository: Repository<Sections>){}

    public async getSections(): Promise<Section[]> {
        return this.repository.find();
    };

    public async getSectionById(id: string): Promise<Section> {
        const section = await this.repository.findOneBy({ id });

        if (!section) {
            throw new NotFoundException(`Section with id ${id} not found.`);
        }

        return section;
    }

    public async saveSection(section: Section): Promise<Section> {
        try {
            const save = this.repository.save(section);
            return save;
        } catch(err) {
            throw new Error(err);
        }
    };

    public async deleteSection(id: string): Promise<void> {
        const section = await this.repository.findOneBy({ id });

        if (!section) {
            throw new NotFoundException(`Section with id ${id} not found.`);
        }
        
        await this.repository.save({
            ...section, 
            active: false
        });
    }
}