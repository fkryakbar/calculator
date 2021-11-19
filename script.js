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
        hasil.innerText = result

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

