import { Body, Controller, Post, Req } from '@nestjs/common'
import { DonsService } from './dons.service'
import { Request } from 'express'
import { CreateOrderDto } from './dtos/create-order.dto'

@Controller('orders')
export class DonsController {
    constructor(private readonly donsService: DonsService) {}

    @Post()
    async createOrder(@Req() req: Request, @Body() createOrderDto: CreateOrderDto) {
        const maTaiKhoan = +req.headers['x-user-id']

        const metadata = await this.donsService.createOrder(maTaiKhoan, createOrderDto)

        return metadata
    }
}
