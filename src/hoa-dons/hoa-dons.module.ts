import { Module } from '@nestjs/common'
import { HoaDonsService } from './hoa-dons.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HoaDon } from 'databases/entities/hoa-don.entity'
import { LoaiPhong } from 'databases/entities/loai-phong.entity'

@Module({
    imports: [TypeOrmModule.forFeature([HoaDon, LoaiPhong])],
    providers: [HoaDonsService]
})
export class HoaDonsModule {}
