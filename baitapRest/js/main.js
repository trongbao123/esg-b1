/**
 * Tính điểm trung bình của 2 khối lớp
 * 
 * + chỉ đc viết 1 hàm tính điểm cho cả 2 khối lớp
 */



let tinhTB = (...diem) => {
    console.log(diem);//Mảng điểm
    let tong = 0;
    diem.map((item) => {
        tong += item;
    });
    return tong / diem.length;
}

let layDiemKhoi1 = () => {
    let toan = document.querySelector("#inpToan").value;
    let ly = document.querySelector("#inpLy").value;
    let hoa = document.querySelector("#inpHoa").value;
    console.log(toan, ly, hoa);

    let dtb = tinhTB(Number(toan), Number(ly), Number(hoa));
 
    document.querySelector("#tbKhoi1").innerHTML = dtb;
}
document.querySelector("#btnKhoi1").onclick = layDiemKhoi1;

let layDiemKhoi2 = () => {
    let van = document.querySelector("#inpVan").value;
    let su = document.querySelector("#inpSu").value;
    let dia = document.querySelector("#inpDia").value;
    let eng = document.querySelector("#inpEnglish").value;
    console.log(van, su, dia, eng);

    let dtb = tinhTB(Number(van), Number(su), Number(dia), Number(eng));

    document.querySelector("#tbKhoi2").innerHTML = dtb;
}
document.querySelector("#btnKhoi2").onclick = layDiemKhoi2;
