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
        sonuc.innerHTML = `
        <h2>🎉 Tebrikler!</h2>
        <p>Gizli Sandık başarıyla açıldı.</p>
        <p>Temel İşlemler Dersi hazırlık çalışmalarını başarıyla tamamladınız.</p>
        `;

        kutu.style.display = "none";
        buton.style.display = "none";

    } else {

        sandik.src = "sandik-kapali.png";

        sonuc.style.color = "#ff4040";
        sonuc.innerHTML = "❌ Şifre yanlış. Tekrar deneyiniz.";

    }

}
