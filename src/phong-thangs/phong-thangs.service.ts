import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TinhTrangPhongThang } from 'common/enums/phong-thang.enum'
import { PhongThang } from 'databases/entities/phong-thang.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PhongThangsService {
    constructor(@InjectRepository(PhongThang) private phongThangRepository: Repository<PhongThang>) {}

    async getAllAvailableRooms() {
        return this.phongThangRepository.find({
            where: {
                TinhTrang: TinhTrangPhongThang.Trong
            },
            order: {
                MaPhong: 'ASC'
            }
        })
    }
}
