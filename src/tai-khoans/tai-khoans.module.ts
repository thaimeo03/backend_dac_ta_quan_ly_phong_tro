import { Module } from '@nestjs/common'
import { TaiKhoansController } from './tai-khoans.controller'
import { TaiKhoansService } from './tai-khoans.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaiKhoan } from 'databases/entities/tai-khoan.entity'

@Module({
    imports: [TypeOrmModule.forFeature([TaiKhoan])],
    controllers: [TaiKhoansController],
    providers: [TaiKhoansService]
})
export class TaiKhoansModule {}
