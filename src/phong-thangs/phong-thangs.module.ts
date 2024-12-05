import { Module } from '@nestjs/common'
import { PhongThangsController } from './phong-thangs.controller'
import { PhongThangsService } from './phong-thangs.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PhongThang } from 'databases/entities/phong-thang.entity'

@Module({
    imports: [TypeOrmModule.forFeature([PhongThang])],
    controllers: [PhongThangsController],
    providers: [PhongThangsService]
})
export class PhongThangsModule {}
