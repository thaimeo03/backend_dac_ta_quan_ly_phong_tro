import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ViTri } from 'databases/entities/vi-tri.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ViTrisService {
    constructor(@InjectRepository(ViTri) private viTriRepository: Repository<ViTri>) {}

    async getAllLocations() {
        return await this.viTriRepository.find({
            order: {
                MaDiaChi: 'ASC'
            }
        })
    }
}
