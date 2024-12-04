import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Phong } from './phong.entity'

@Entity()
export class LoaiPhong {
    @PrimaryGeneratedColumn('increment')
    MaLoaiPhong: number

    @Column({ type: 'varchar', length: 50 })
    TenLoaiPhong: string

    @Column({ type: 'float' })
    DienTichMin: number

    @Column({ type: 'float' })
    DienTichMax: number

    @Column({ type: 'text', nullable: true })
    MoTa: string

    @Column({ type: 'float' })
    GiaThue: number

    @OneToMany(() => Phong, (phong) => phong.LoaiPhong)
    Phongs: Phong[]
}
