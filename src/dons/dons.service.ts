import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Don } from 'databases/entities/don.entity'
import { Repository } from 'typeorm'
import { CreateOrderDto } from './dtos/create-order.dto'
import { TaiKhoan } from 'databases/entities/tai-khoan.entity'
import { HoaDonsService } from 'src/hoa-dons/hoa-dons.service'
import { PhongThang } from 'databases/entities/phong-thang.entity'

@Injectable()
export class DonsService {
    constructor(
        @InjectRepository(Don) private donRepository: Repository<Don>,
        @InjectRepository(TaiKhoan) private taiKhoanRepository: Repository<TaiKhoan>,
        @InjectRepository(PhongThang) private phongThangRepository: Repository<PhongThang>,
        private hoaDonsService: HoaDonsService
    ) {}

    async createOrder(maTaiKhoan: number, createOrderDto: CreateOrderDto) {
        const taiKhoan = await this.taiKhoanRepository.findOneBy({ MaTaiKhoan: maTaiKhoan })
        if (!taiKhoan) throw new NotFoundException('Tài khoản không tồn tại')

        const { soDienThoaiLienLac, soLuongNguoiO, phongThangKeys } = createOrderDto

        const don = await this.donRepository.save({
            SoDienThoaiLienLac: soDienThoaiLienLac,
            SoLuongNguoiO: soLuongNguoiO,
            TaiKhoan: taiKhoan
        })

        await Promise.all(
            phongThangKeys.map(async (phongThangKey) => {
                const phongThang = await this.phongThangRepository.findOneBy({
                    MaPhong: phongThangKey.maPhong,
                    Nam: phongThangKey.nam,
                    Thang: phongThangKey.thang
                })
                return this.hoaDonsService.createHoaDon({ don, phongThang })
            })
        )

        return don
    }
}
