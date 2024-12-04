import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { ThietBi } from './thiet-bi.entity'
import { Phong } from './phong.entity'

@Entity()
export class ThietBi_Phong {
    @PrimaryColumn()
    MaThietBi: number

    @PrimaryColumn()
    MaPhong: number

    @Column({ type: 'integer' })
    SoLuong: number

    @ManyToOne(() => ThietBi, (thietBi) => thietBi.ThietBiPhongs)
    @JoinColumn({ name: 'MaThietBi' })
    ThietBi: ThietBi

    @ManyToOne(() => Phong, (phong) => phong.ThietBiPhongs)
    @JoinColumn({ name: 'MaPhong' })
    Phong: Phong
}
