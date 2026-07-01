function kontrol(){

let sifre=document.getElementById("sifre").value;

let sonuc=document.getElementById("sonuc");

if(sifre=="1234567"){

    document.getElementById("sandik").src="sandik-acik.png";

}

sonuc.style.color="lime";

sonuc.innerHTML="🎉 Tebrikler! Sandık açıldı.";

}

else{

sonuc.style.color="red";

sonuc.innerHTML="❌ Şifre yanlış.";

}

}
