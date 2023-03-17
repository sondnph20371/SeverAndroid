module.exports = class Student{
    constructor(ten, masv, diemTB) {
        this.ten = ten;
        this.masv = masv;
        this.diemTB = diemTB;
    }

    getInfor = () => {
        return `${this.ten} - ${this.masv} - ${this.getDiemTB()} \n`;

    }
    getDiemTB = () => {
        var diemTB = 5 + Math.random() * 6;
        return diemTB;
    }
}