import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from 'databases/data-source'
import { TaiKhoansModule } from './tai-khoans/tai-khoans.module';
import { PhongsModule } from './phongs/phongs.module';

@Module({
    imports: [TypeOrmModule.forRoot(dataSourceOptions), TaiKhoansModule, PhongsModule],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
