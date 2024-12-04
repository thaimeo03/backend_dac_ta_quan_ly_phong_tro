import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ThietBi_Phong } from './thiet-bi_phong.entity'

@Entity()
export class ThietBi {
    @PrimaryGeneratedColumn('increment')
    MaThietBi: number

    @Column({ type: 'varchar', length: 50 })
    TenThietBi: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    NhanHieu: string

    @Column({ type: 'text', nullable: true })
    GhiChu: string

    @OneToMany(() => ThietBi_Phong, (thietBiPhong) => thietBiPhong.ThietBi)
    ThietBiPhongs: ThietBi_Phong[]
}
