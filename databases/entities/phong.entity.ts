import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { LoaiPhong } from './loai-phong.entity'
import { TaiKhoan } from './tai-khoan.entity'
import { ViTri } from './vi-tri.entity'
import { ThietBi_Phong } from './thiet-bi_phong.entity'
import { PhongThang } from './phong-thang.entity'

@Entity()
export class Phong {
    @PrimaryGeneratedColumn('increment')
    MaPhong: number

    @Column({ type: 'varchar', length: 50 })
    TenPhong: string

    @Column({ type: 'integer' })
    SoNguoiToiDa: number

    @Column({ type: 'float' })
    DienTich: number

    @Column({ type: 'text', nullable: true })
    MoTa: string

    @Column({ type: 'integer' })
    SoTang: number

    @ManyToOne(() => LoaiPhong, (loaiPhong) => loaiPhong.Phongs)
    LoaiPhong: LoaiPhong

    @ManyToOne(() => TaiKhoan, (taiKhoan) => taiKhoan.Phongs)
    TaiKhoan: TaiKhoan

    @ManyToOne(() => ViTri, (viTri) => viTri.Phongs)
    ViTri: ViTri

    @OneToMany(() => ThietBi_Phong, (thietBiPhong) => thietBiPhong.Phong)
    ThietBiPhongs: ThietBi_Phong[]

    @OneToMany(() => PhongThang, (phongThang) => phongThang.Phong)
    PhongThangs: PhongThang[]
}
