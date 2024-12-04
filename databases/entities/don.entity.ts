import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { TaiKhoan } from './tai-khoan.entity'
import { PhongThang } from './phong-thang.entity'
import { HoaDon } from './hoa-don.entity'

@Entity()
export class Don {
    @PrimaryGeneratedColumn('increment')
    MaDon: number

    @Column({ type: 'varchar', length: 15 })
    SoDienThoaiLienLac: string

    @Column({ type: 'integer' })
    SoLuongNguoiO: number

    @CreateDateColumn()
    ThoiGianTaoDon: Date

    @ManyToOne(() => TaiKhoan, (taiKhoan) => taiKhoan.Dons)
    TaiKhoan: TaiKhoan

    @ManyToOne(() => PhongThang, (phongThang) => phongThang.Dons)
    PhongThang: PhongThang

    @OneToMany(() => HoaDon, (hoaDon) => hoaDon.Don)
    HoaDons: HoaDon[]
}
