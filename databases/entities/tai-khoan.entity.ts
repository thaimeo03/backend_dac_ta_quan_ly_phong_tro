import { Role } from 'common/enums/tai-khoan.enum'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Phong } from './phong.entity'
import { Don } from './don.entity'

@Entity()
export class TaiKhoan {
    @PrimaryGeneratedColumn('increment')
    MaTaiKhoan: number

    @Column({ type: 'varchar', length: 15, unique: true })
    SoDienThoai: string

    @Column({ type: 'varchar', length: 50, unique: true })
    Email: string

    @Column({ type: 'varchar', length: 30 })
    MatKhau: string

    @Column({ type: 'enum', enum: Role, default: Role.KhachHang })
    VaiTro: Role

    @OneToMany(() => Phong, (phong) => phong.TaiKhoan)
    Phongs: Phong[]

    @OneToMany(() => Don, (don) => don.TaiKhoan)
    Dons: Don[]
}
