import { TrangThaiHoaDon } from 'common/enums/hoa-don.enum'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PhongThang } from './phong-thang.entity'
import { Don } from './don.entity'

@Entity()
export class HoaDon {
    @PrimaryGeneratedColumn('increment')
    SoThuTu: number

    @Column({ type: 'float' })
    TongTien: number

    @Column({ type: 'enum', enum: TrangThaiHoaDon, default: TrangThaiHoaDon.ChuaThanhToan })
    TrangThai: TrangThaiHoaDon

    @ManyToOne(() => PhongThang, (phongThang) => phongThang.HoaDons)
    PhongThang: PhongThang

    @ManyToOne(() => Don, (don) => don.HoaDons)
    Don: Don
}
