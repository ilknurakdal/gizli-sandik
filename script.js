function kontrol(){

    let sifre = document.getElementById("sifre").value;
    let sandik = document.getElementById("sandik");
    let sonuc = document.getElementById("sonuc");

    if(sifre === "1234567"){

        sandik.src = "sandik-acik.png";
confetti({
    particleCount: 250,
    spread: 180,
    origin: { y: 0.6 }
});
        sonuc.style.color = "#7CFC00";
        sonuc.innerHTML = "🎉 Tebrikler! Gizli Sandık açıldı.";

    }else{

    sandik.src = "sandik-kapali.png";
console.log("Salla sınıfı eklendi");
    sandik.classList.add("salla");

    setTimeout(function(){
        sandik.classList.remove("salla");
    }, 500);

    sonuc.style.color = "#ff4040";
    sonuc.innerHTML = "❌ Şifre yanlış.";

}
}
