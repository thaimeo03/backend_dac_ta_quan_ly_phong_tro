import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Phong } from './phong.entity'

@Entity()
export class ViTri {
    @PrimaryGeneratedColumn('increment')
    MaDiaChi: number

    @Column({ type: 'varchar', length: 50, nullable: true })
    Tinh: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    Quan: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    Phuong: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    SoNha: string

    @OneToMany(() => Phong, (phong) => phong.ViTri)
    Phongs: Phong[]
}
