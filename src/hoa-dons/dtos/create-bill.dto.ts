import { Don } from 'databases/entities/don.entity'
import { PhongThang } from 'databases/entities/phong-thang.entity'

export class CreateBillDto {
    phongThang: PhongThang
    don: Don
}
