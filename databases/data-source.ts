import { DataSourceOptions } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'QuanLyPhongTroThang',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false
}
