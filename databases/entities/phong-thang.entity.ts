import { TinhTrangPhongThang } from 'common/enums/phong-thang.enum'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Phong } from './phong.entity'
import { Don } from './don.entity'
import { HoaDon } from './hoa-don.entity'

@Entity()
export class PhongThang {
    @PrimaryColumn()
    MaPhong: number

    @PrimaryColumn({ type: 'integer' })
    Nam: number

    @PrimaryColumn({ type: 'integer' })
    Thang: number

    @Column({ type: 'enum', enum: TinhTrangPhongThang, default: TinhTrangPhongThang.Trong })
    TinhTrang: TinhTrangPhongThang

    @Column({ type: 'float', nullable: true })
    GiaDien: number

    @Column({ type: 'float', nullable: true })
    GiaNuoc: number

    @Column({ type: 'float', nullable: true })
    GiaRac: number

    @Column({ type: 'float', nullable: true })
    GiaWifi: number

    @ManyToOne(() => Phong, (phong) => phong.PhongThangs)
    @JoinColumn({ name: 'MaPhong' })
    Phong: Phong

    @OneToMany(() => Don, (don) => don.PhongThang)
    Dons: Don[]

    @OneToMany(() => HoaDon, (hoaDon) => hoaDon.PhongThang)
    HoaDons: HoaDon[]
}
