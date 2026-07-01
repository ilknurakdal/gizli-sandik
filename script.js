function kontrol(){

    let sifre = document.getElementById("sifre").value;
    let sandik = document.getElementById("sandik");
    let sonuc = document.getElementById("sonuc");

    if(sifre === "1234567"){

        sandik.src = "sandik-acik.png";

        sonuc.style.color = "#7CFC00";
        sonuc.innerHTML = "🎉 Tebrikler! Gizli Sandık açıldı.";

    }else{

        sandik.src = "sandik-kapali.png";

        sonuc.style.color = "#ff4040";
        sonuc.innerHTML = "❌ Şifre yanlış.";

    }

}
