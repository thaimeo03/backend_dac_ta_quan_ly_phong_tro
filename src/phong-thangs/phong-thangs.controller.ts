import { Controller, Get } from '@nestjs/common'
import { PhongThangsService } from './phong-thangs.service'

@Controller('monthly-rooms')
export class PhongThangsController {
    constructor(private readonly phongThangsService: PhongThangsService) {}

    @Get('available')
    async getAllAvailableRooms() {
        const metadata = await this.phongThangsService.getAllAvailableRooms()

        return metadata
    }
}
