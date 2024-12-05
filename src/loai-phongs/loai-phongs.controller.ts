import { Controller, Get } from '@nestjs/common'
import { LoaiPhongsService } from './loai-phongs.service'

@Controller('room-types')
export class LoaiPhongsController {
    constructor(private readonly loaiPhongsService: LoaiPhongsService) {}

    @Get()
    async getAllRoomTypes() {
        const metadata = await this.loaiPhongsService.getAllRoomTypes()

        return metadata
    }
}
