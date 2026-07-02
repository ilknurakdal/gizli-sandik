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

// Popup dışına tıklayınca kapansın
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

// Sertifika oluştur
function sertifikaOlustur(){

    let ad = document.getElementById("ad").value.trim();
    let soyad = document.getElementById("soyad").value.trim();

    if(ad === "" || soyad === ""){
        alert("Lütfen adınızı ve soyadınızı giriniz.");
        return;
    }

    const canvas = document.getElementById("sertifikaCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.src = "assets/sertifika.png";

    img.onload = function(){

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

        // Ad Soyad
        ctx.font = "bold 88px Georgia";
        ctx.fillStyle = "#1f365c";
        ctx.textAlign = "center";

        ctx.fillText(
            ad + " " + soyad,
            canvas.width / 2,
            930
        );

        // Eski ekranları tamamen gizle
        document.getElementById("anaSayfa").style.display = "none";
        document.getElementById("sertifikaAlani").style.display = "none";
        document.getElementById("tebrikKutusu").style.display = "none";

        // Tam ekran sertifika
        const alan = document.getElementById("sertifikaGoruntusu");
        alan.style.display = "block";
        alan.classList.add("sertifika-tam-ekran");

        // İndir butonu
        document.getElementById("indirBtn").style.display = "block";

        // Sayfayı en üste getir
        window.scrollTo(0,0);

    };

}

// PNG İndir
document.getElementById("indirBtn").addEventListener("click", function(){

    const canvas = document.getElementById("sertifikaCanvas");

    const link = document.createElement("a");

    link.download = "Basari-Sertifikasi.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

});
