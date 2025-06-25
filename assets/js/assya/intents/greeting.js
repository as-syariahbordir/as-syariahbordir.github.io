// 📁 intents/greeting.js

export default function greeting() {
  const jam = new Date().getHours();
  let waktu = "Hai";

  if (jam >= 5 && jam < 12) waktu = "Selamat pagi 🌞";
  else if (jam >= 12 && jam < 17) waktu = "Selamat siang ☀️";
  else if (jam >= 17 && jam < 21) waktu = "Selamat sore 🌇";
  else waktu = "Selamat malam 🌙";

  const nama = firebase.auth().currentUser?.displayName?.split(" ")[0] || "";
  const sapaan = nama ? `${waktu}, ${nama} 👋` : waktu;

  return {
    type: "html",
    content: `
      <div class="text-sm leading-relaxed">
        ${sapaan}! Saya <strong>Assya</strong>, siap bantu kamu hari ini. <br/>
        Ingin lihat <button class="underline text-blue-500" onclick="document.querySelector('#user-input').value='katalog';document.querySelector('#chat-form').dispatchEvent(new Event('submit'))">katalog</button>?
      </div>
    `
  };
} 
