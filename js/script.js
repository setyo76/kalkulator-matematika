function hitungLuas() {
    var sisi = document.getElementById('sisi').value;
    var hasil = sisi*sisi;
    
    document.getElementById('hasil').innerHTML = hasil;
}

function resetPersegiLuas() {
    let reset = document.querySelector("#hasil").innerHTML ="<h1>-</h1>";
}



function hitungKeliling() {
    var sisi = document.getElementById('sisi').value;
    var result = (4*sisi);
    
    document.getElementById('result').innerHTML = result;
}

function resetPersegiKeliling() {
    let reset = document.querySelector("#result").innerHTML ="<h1>-</h1>";
}
