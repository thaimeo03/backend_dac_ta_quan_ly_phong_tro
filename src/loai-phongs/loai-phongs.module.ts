import { Module } from '@nestjs/common'
import { LoaiPhongsController } from './loai-phongs.controller'
import { LoaiPhongsService } from './loai-phongs.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoaiPhong } from 'databases/entities/loai-phong.entity'

@Module({
    imports: [TypeOrmModule.forFeature([LoaiPhong])],
    controllers: [LoaiPhongsController],
    providers: [LoaiPhongsService]
})
export class LoaiPhongsModule {}
