// determinan
document.getElementById("tes").onclick = function(){
    var aa = parseInt(document.getElementById("11").value) ;
    var ab = parseInt(document.getElementById("12").value) ;
    var ac = parseInt(document.getElementById("13").value) ;
    var ba = parseInt(document.getElementById("21").value) ;
    var bb = parseInt(document.getElementById("22").value) ;
    var bc = parseInt(document.getElementById("23").value) ;
    var ca = parseInt(document.getElementById("31").value) ;
    var cb = parseInt(document.getElementById("32").value) ;
    var cc = parseInt(document.getElementById("33").value) ;

    var hasil = document.getElementById("hasil")

    var result = (aa * bb * cc) + (ab * bc * ca) + (ac * ba * cb) - ((ca * bb * ac) + (cb * bc * aa) + (cc * ba * ab))
    if (isNaN(result)) {
        hasil.innerText = "Input Matriks Tidak Valid"
        console.log("NaN terdeteksi")

    }else {
        hasil.innerText = "Nilai Determinan adalah " + result

    }
    
    console.log(result)
}
// var a;
// document.getElementById("button").onclick = function() {
//     if (a == 1) {
//         var determinan = document.getElementById("determinan").style.display = "inline"
//         var determinan = document.getElementById("kalkulator").style.display = "none"
//         return a = 0
//     } else {
//         var determinan = document.getElementById("determinan").style.display = "none"
//         var determinan = document.getElementById("kalkulator").style.display = "inline"
//         return a = 1

//     }
    
// }
// document.getElementById("opsiukuran").onclick = function() {
//     var test = document.getElementById('opsiukuran').options[document.getElementById('opsiukuran').selectedIndex].value
    

// }

// calculator
var hasil = document.getElementById("input")

// tombol1


document.getElementById("sin").onclick = function(){
    var sin = Math.sin((document.getElementById("input").value)*Math.PI/180)
    hasil.value = sin
}
document.getElementById("cos").onclick = function(){
    var cos = Math.cos((document.getElementById("input").value)*Math.PI/180)
    hasil.value = cos
}
document.getElementById("tan").onclick = function(){
    var tan = Math.tan((document.getElementById("input").value)*Math.PI/180)
    hasil.value = tan   
}
document.getElementById("clr").onclick = function() {
    hasil.value = ""
    console.log("cleared")
}
//tombol2
document.getElementById("pangkat2").onclick = function() {
    var pangkat2 = Math.pow(hasil.value, 2)
    hasil.value = pangkat2
}
document.getElementById("pangkat3").onclick = function() {
    var pangkat3 = Math.pow(hasil.value, 3)
    hasil.value = pangkat3
}
document.getElementById("akar2").onclick = function() {
    var akar2 = Math.sqrt(hasil.value)
    hasil.value = akar2
}
document.getElementById("akar3").onclick = function() {
    var akar3 = Math.cbrt(hasil.value)
    hasil.value = akar3
}
// tombol3
function insert(num) {
    document.getElementById("input").value = document.getElementById("input").value + num
}

function result(){
    var x = document.getElementById("input").value
    document.getElementById("input").value = eval(x)
}
// kongruensi linear
document.getElementById("carix").onclick = function () {
    var jawaban = []
    var mod = parseInt(document.getElementById("inputmod").value)
    var koe = parseInt(document.getElementById("inputkoe").value) 
    var sisa = parseInt(document.getElementById("inputsisa").value)
    var hasil =  document.getElementById("hasilkong")
    // console.log(typeof(mod))
    for (i = 0 ; i < mod ; i ++) {
        var cek = i*koe % mod
        if (cek === sisa) {
            jawaban.push(i)
            hasil.innerText = "Solusi untuk x " + "yang kurang dari " + mod + " adalah " + jawaban.join(",")
        } 
    }
    if (jawaban.length == 0) {
        hasil.innerText = "Tidak ada Solusi untuk x"

    }   
}
// FPB KPK
document.getElementById("FPB").onclick = function (){
    var faknum1 = []
    var faknum2 = []
    var num1 = parseInt(document.getElementById("inputnum1").value)
    var num2 = parseInt(document.getElementById("inputnum2").value)
    var fpbkpk = document.getElementById("hasilfpbkpk")
    for(i = 1; i <= (num1 < num2 ? num2:num1)  ; i++) {
        if (num1 % i == 0) {
            faknum1.push(i)
        }
        if (num2 % i == 0) {
            faknum2.push(i)
        }
    }
    var CF =faknum1.filter(x => faknum2.includes(x))
    fpbkpk.innerText = "Faktor dari "+ num1 + " = " + faknum1.join(", ") + "\n" + "\n" +"Faktor dari "+num2 + " = " + faknum2.join(", ") + "\n" + "\n" + "Jadi Faktor Persekutuan Terbesarnya adalah " + CF[CF.length - 1]
    if (isNaN(num1 && num2)) {
        fpbkpk.innerText = "Angka yang dimasukkan tidak Valid"
        
    }
}
document.getElementById("KPK").onclick = function (){
    var faknum1 = []
    var faknum2 = []
    var num1 = parseInt(document.getElementById("inputnum1").value)
    var num2 = parseInt(document.getElementById("inputnum2").value)
    var fpbkpk = document.getElementById("hasilfpbkpk")
    for(i = 1; i <= (num1 < num2 ? num2:num1)  ; i++) {
        if (num1 % i == 0) {
            faknum1.push(i)
        }
        if (num2 % i == 0) {
            faknum2.push(i)
        }
    }
    var CF =faknum1.filter(x => faknum2.includes(x))
    fpbkpk.innerText = "KPK didapat dari " + "("+  num1 + " x " + num2 + ")" +" / " + "FPB dari " + num1 + " dan " + num2 + "\n" + "\n" + num1*num2 + " / " + CF[CF.length - 1] + "\n" + "\n" + "Sehingga nilai KPK nya adalah " + num1*num2/CF[CF.length - 1]
    if (isNaN(num1 && num2)) {
        fpbkpk.innerText = "Angka yang dimasukkan tidak Valid"
        
    }

    

}


