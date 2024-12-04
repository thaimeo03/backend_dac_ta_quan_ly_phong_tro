import { Body, Controller, Post, Req } from '@nestjs/common'
import { PhongsService } from './phongs.service'
import { Request } from 'express'
import { CreateRoomDto } from './dtos/create-room.dto'

@Controller('rooms')
export class PhongsController {
    constructor(private readonly phongsService: PhongsService) {}

    @Post()
    async createRoom(@Req() req: Request, @Body() createRoomDto: CreateRoomDto) {
        const maTaiKhoan = +req.headers['x-user-id']
        const metadata = await this.phongsService.createRoom(maTaiKhoan, createRoomDto)

        return metadata
    }
}
