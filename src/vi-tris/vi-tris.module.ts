import { Module } from '@nestjs/common'
import { ViTrisController } from './vi-tris.controller'
import { ViTrisService } from './vi-tris.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ViTri } from 'databases/entities/vi-tri.entity'

@Module({
    imports: [TypeOrmModule.forFeature([ViTri])],
    controllers: [ViTrisController],
    providers: [ViTrisService]
})
export class ViTrisModule {}
