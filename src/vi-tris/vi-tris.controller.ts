import { Controller, Get } from '@nestjs/common'
import { ViTrisService } from './vi-tris.service'

@Controller('locations')
export class ViTrisController {
    constructor(private readonly viTrisService: ViTrisService) {}

    @Get()
    async getAllLocations() {
        const metadata = await this.viTrisService.getAllLocations()
        return metadata
    }
}
