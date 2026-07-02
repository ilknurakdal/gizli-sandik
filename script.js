function kontrol() {

    let sifre = document.getElementById("sifre").value;
    let sandik = document.getElementById("sandik");
    let sonuc = document.getElementById("sonuc");
    let kutu = document.getElementById("sifre");
    let buton = document.querySelector("button");

    if (sifre === "1234567") {

        sandik.src = "sandik-acik.png";

        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });

        sonuc.style.color = "#7CFC00";
        sonuc.innerHTML = "🎉 Tebrikler! Gizli Sandık açıldı.";

        document.getElementById("tebrikKutusu").style.display = "flex";

        kutu.style.display = "none";
        buton.style.display = "none";

    } else {

        sandik.src = "sandik-kapali.png";

        sonuc.style.color = "#ff4040";
        sonuc.innerHTML = "❌ Şifre yanlış. Tekrar deneyiniz.";

    }

}

// Kararmış alana tıklayınca popup kapansın
document.getElementById("tebrikKutusu").addEventListener("click", function(event){

    if(event.target === this){
        this.style.display = "none";
    }

});

// Sertifika ekranına geç
function sertifikayaGec(){

    document.getElementById("tebrikKutusu").style.display = "none";
    document.getElementById("sertifikaAlani").style.display = "block";

}

// Şimdilik test
function sertifikaOlustur(){

    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;

    if(ad === "" || soyad === ""){
        alert("Lütfen adınızı ve soyadınızı giriniz.");
        return;
    }

    alert(ad + " " + soyad + "\n\nSertifika oluşturma aşamasına geçiyoruz.");

}
