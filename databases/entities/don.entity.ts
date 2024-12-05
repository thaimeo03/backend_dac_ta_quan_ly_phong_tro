import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { TaiKhoan } from './tai-khoan.entity'
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

    @ManyToOne(() => TaiKhoan, (taiKhoan) => taiKhoan.Dons, { nullable: true })
    NhanVienTiepNhan: TaiKhoan

    @OneToMany(() => HoaDon, (hoaDon) => hoaDon.Don)
    HoaDons: HoaDon[]
}
