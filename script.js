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

        // Tebrik penceresini göster
        document.getElementById("tebrikKutusu").style.display = "flex";

        // Şifre kutusu ve butonu gizle
        kutu.style.display = "none";
        buton.style.display = "none";

    } else {

        sandik.src = "sandik-kapali.png";

        sonuc.style.color = "#ff4040";
        sonuc.innerHTML = "❌ Şifre yanlış. Tekrar deneyiniz.";

    }

}

// Kararmış alana tıklanınca pencereyi kapat
function kapatPopup(event) {

    if (event.target.id === "tebrikKutusu") {
        document.getElementById("tebrikKutusu").style.display = "none";
    } // Popup'ın dışına tıklanınca kapat
const popup = document.getElementById("tebrikKutusu");

popup.addEventListener("click", function (event) {

    if (event.target === popup) {
        popup.style.display = "none";
    }

});

}
function sertifikayaGec(){

    document.getElementById("tebrikKutusu").style.display = "none";

    document.getElementById("sertifikaAlani").style.display = "block";

}

function sertifikaOlustur(){

    let ad=document.getElementById("ad").value;
    let soyad=document.getElementById("soyad").value;

    if(ad==="" || soyad===""){

        alert("Lütfen adınızı ve soyadınızı giriniz.");
        return;

    }

    alert(ad+" "+soyad+"\n\nSertifika bir sonraki adımda oluşturulacak.");

}
