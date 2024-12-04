import { Body, Controller, Post } from '@nestjs/common'
import { LoginDto } from './dtos/login.dto'
import { TaiKhoansService } from './tai-khoans.service'

@Controller('accounts')
export class TaiKhoansController {
    constructor(private readonly taiKhoansService: TaiKhoansService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const metadata = await this.taiKhoansService.login(loginDto)

        return metadata
    }
}
