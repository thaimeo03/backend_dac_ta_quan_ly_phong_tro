import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Phong } from 'databases/entities/phong.entity'
import { Repository } from 'typeorm'
import { CreateRoomDto } from './dtos/create-room.dto'
import { TaiKhoan } from 'databases/entities/tai-khoan.entity'
import { ViTri } from 'databases/entities/vi-tri.entity'
import { LoaiPhong } from 'databases/entities/loai-phong.entity'

@Injectable()
export class PhongsService {
    constructor(
        @InjectRepository(Phong) private phongRepository: Repository<Phong>,
        @InjectRepository(TaiKhoan) private taiKhoanRepository: Repository<TaiKhoan>,
        @InjectRepository(ViTri) private viTriRepository: Repository<ViTri>,
        @InjectRepository(LoaiPhong) private loaiPhongRepository: Repository<LoaiPhong>
    ) {}

    async createRoom(maTaiKhoan: number, createRoomDto: CreateRoomDto) {
        const { tenPhong, soNguoiToiDa, dienTich, moTa, soTang, maLoaiPhong, maViTri } = createRoomDto

        const [taiKhoan, viTri, loaiPhong] = await Promise.all([
            this.taiKhoanRepository.findOneBy({ MaTaiKhoan: maTaiKhoan }),
            this.viTriRepository.findOneBy({ MaDiaChi: maViTri }),
            this.loaiPhongRepository.findOneBy({ MaLoaiPhong: maLoaiPhong })
        ])

        if (!taiKhoan || !viTri || !loaiPhong) {
            throw new NotFoundException('Tài khoản, vị trí hoặc loại phòng không tồn tại')
        }

        return this.phongRepository.save({
            TenPhong: tenPhong,
            SoNguoiToiDa: soNguoiToiDa,
            DienTich: dienTich,
            MoTa: moTa,
            SoTang: soTang,
            LoaiPhong: loaiPhong,
            TaiKhoan: taiKhoan,
            ViTri: viTri
        })
    }

    async getAllRooms() {
        return this.phongRepository.find({
            order: {
                MaPhong: 'ASC'
            }
        })
    }
}
