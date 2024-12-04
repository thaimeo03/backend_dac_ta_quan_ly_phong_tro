import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { HoaDon } from 'databases/entities/hoa-don.entity'
import { Repository } from 'typeorm'
import { CreateBillDto } from './dtos/create-bill.dto'
import { LoaiPhong } from 'databases/entities/loai-phong.entity'

@Injectable()
export class HoaDonsService {
    constructor(
        @InjectRepository(HoaDon) private hoaDonRepository: Repository<HoaDon>,
        @InjectRepository(LoaiPhong) private loaiPhongRepository: Repository<LoaiPhong>
    ) {}

    async createHoaDon(createBillDto: CreateBillDto) {
        const { don, phongThang } = createBillDto

        const loaiPhong = await this.loaiPhongRepository.findOne({
            relations: {
                Phongs: true
            },
            where: {
                Phongs: {
                    MaPhong: phongThang.MaPhong
                }
            }
        })
        if (!loaiPhong) throw new NotFoundException('Phòng không tồn tại')

        const tongTien =
            loaiPhong.GiaThue + phongThang.GiaDien + phongThang.GiaNuoc + phongThang.GiaRac + phongThang.GiaWifi

        return this.hoaDonRepository.save({ TongTien: tongTien, Don: don, PhongThang: phongThang })
    }
}
