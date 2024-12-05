import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LoaiPhong } from 'databases/entities/loai-phong.entity'
import { Repository } from 'typeorm'

@Injectable()
export class LoaiPhongsService {
    constructor(@InjectRepository(LoaiPhong) private loaiPhongRepository: Repository<LoaiPhong>) {}

    async getAllRoomTypes() {
        return await this.loaiPhongRepository.find({
            order: {
                MaLoaiPhong: 'ASC'
            }
        })
    }
}
