const nama ="wildan nugraha";
let usia = 15;
const biodata = document.getElementById("biodata");
function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) { 
        generasi = "generasi remaja";
    }
     else if (usia > 18 && usia < 30) {
generasi = "anda dewasa";
    }
    else if(usia >= 30) {
        generasi = "generasi tua";
    }
    else if(usia > 2 && usia < 10) {
generasi = "anda anak anak";
    }
     else {
generasi = "lu masih bayyi ya hahaha";
    }
   return biodata.innerHTML= generasi;
}
console.log(nama);
console.log(usia);
generateBiodata();