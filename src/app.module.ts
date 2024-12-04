import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from 'databases/data-source'
import { TaiKhoansModule } from './tai-khoans/tai-khoans.module';
import { PhongsModule } from './phongs/phongs.module';
import { DonsModule } from './dons/dons.module';
import { HoaDonsModule } from './hoa-dons/hoa-dons.module';

@Module({
    imports: [TypeOrmModule.forRoot(dataSourceOptions), TaiKhoansModule, PhongsModule, DonsModule, HoaDonsModule],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
