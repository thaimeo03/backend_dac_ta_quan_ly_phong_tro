type phongThangKey = {
    maPhong: number
    nam: number
    thang: number
}

export class CreateOrderDto {
    soDienThoaiLienLac: string
    soLuongNguoiO: number
    phongThangKeys: phongThangKey[]
}
