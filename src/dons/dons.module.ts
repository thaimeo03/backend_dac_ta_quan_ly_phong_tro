import { Module } from '@nestjs/common'
import { DonsController } from './dons.controller'
import { DonsService } from './dons.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Don } from 'databases/entities/don.entity'
import { HoaDonsModule } from 'src/hoa-dons/hoa-dons.module'
import { TaiKhoan } from 'databases/entities/tai-khoan.entity'
import { PhongThang } from 'databases/entities/phong-thang.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Don, TaiKhoan, PhongThang]), HoaDonsModule],
    controllers: [DonsController],
    providers: [DonsService]
})
export class DonsModule {}
