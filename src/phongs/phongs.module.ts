import { Module } from '@nestjs/common'
import { PhongsController } from './phongs.controller'
import { PhongsService } from './phongs.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Phong } from 'databases/entities/phong.entity'
import { TaiKhoan } from 'databases/entities/tai-khoan.entity'
import { ViTri } from 'databases/entities/vi-tri.entity'
import { LoaiPhong } from 'databases/entities/loai-phong.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Phong, TaiKhoan, ViTri, LoaiPhong])],
    controllers: [PhongsController],
    providers: [PhongsService]
})
export class PhongsModule {}
