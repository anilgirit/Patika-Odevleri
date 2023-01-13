let UserName = prompt("Kullanıcı Adı Girin..."); //promptla kullanıcı adı aldık
let myName = document.querySelector("#myName"); //elementleri seçtik
let myClock = document.querySelector("#myClock"); //elementleri seçtik
let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
]; //tarihi gösterebilmek için günler dizesi oluşturduk.

//Fonksiyonları oluşturuyoruz.
function getName() {
  if (UserName != false) {
    myName.innerHTML = `${UserName}`;
  } else {
    alert("Geçerli Bir Kullanıcı Adı Giriniz...");
    location.reload(); //Sayfayı yenileceyek
  }
}
function showTime() {
  let clock = new Date();
  let hours = clock.getHours();
  let minutes = clock.getMinutes();
  let second = clock.getSeconds();
  let day = days[clock.getDay()];
  myClock.innerHTML = `${hours} : ${minutes} : ${second}  ${day}`;
}

//oluşturduğumuz fonksiyonları çağırıyoruz.
getName();
setInterval(showTime, 1000); //SetInterval kullanmamızın ebebi showtime fonksiyonunda bir defa tarihi aldık ama bunu her saniye güncellememiz gerekiyor o sebeple setInterval kullandık.
