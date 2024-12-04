import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TaiKhoan } from 'databases/entities/tai-khoan.entity'
import { Repository } from 'typeorm'
import { LoginDto } from './dtos/login.dto'

@Injectable()
export class TaiKhoansService {
    constructor(@InjectRepository(TaiKhoan) private taiKhoanRepository: Repository<TaiKhoan>) {}

    async login(loginDto: LoginDto) {
        // Kiểm tra xem email hoặc số điện thoại tồn tại
        const taiKhoan = await this.taiKhoanRepository.findOneBy({
            Email: loginDto.email,
            SoDienThoai: loginDto.soDienThoai,
            MatKhau: loginDto.matKhau
        })

        if (!taiKhoan) {
            throw new BadRequestException('Email, số điện thoại hoặc mật khẩu không đúng')
        }

        return {
            maTaiKhoan: taiKhoan.MaTaiKhoan,
            email: taiKhoan.Email,
            vaiTro: taiKhoan.VaiTro
        }
    }
}
