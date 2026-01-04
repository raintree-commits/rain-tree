const memberSelect = document.getElementById("member");

members.forEach(m => {
  const opt = document.createElement("option");
  opt.textContent = m.name[currentLang];
  memberSelect.appendChild(opt);
});

function generate(){
  const percent = Math.floor(Math.random() * 101);
  const hearts = Math.max(1, Math.floor(percent / 10));

  let msg = {
    id: "",
    en: "",
    jp: ""
  };

  if(percent <= 30){
    msg = {
      id: "Awan mendung masih malu-malu. Sepertinya kamu harus lebih giat mendukungnya dari bangku penonton!",
      en: "The clouds are still shy. It looks like you need to cheer louder from the front row!",
      jp: "雲がまだ隠れています。もっと客席から大きな声で応援が必要かも！"
    };
  } else if(percent <= 50){
    msg = {
      id: "Ada getaran kecil seperti gerimis tipis. Dia mulai menyadari kehadiranmu di setiap penampilan!",
      en: "There’s a slight spark, like a light drizzle. She’s starting to notice you at every performance!",
      jp: "小雨のようなドキドキ。彼女はあなたの存在に気づき始めているよ！"
    };
  } else if(percent <= 75){
    msg = {
      id: "Wah, kemistri yang kuat! Kamu bukan sekadar fans, kamu adalah sumber semangatnya di bawah pohon hujan.",
      en: "Wow, strong chemistry! You're more than just a fan; you're her source of energy under the rain tree.",
      jp: "強い相性！あなたはただのファンではなく、レインツリーの下で彼女の支えになっています。"
    };
  } else {
    msg = {
      id: "TAKDIR! Kamu dan dia adalah harmoni sempurna. Seperti pelangi indah yang muncul setelah hujan lebat.",
      en: "DESTINY! You and her are in perfect harmony. Like a beautiful rainbow appearing after a heavy rain.",
      jp: "運命です！あなたと彼女は最高のハーモニー。大雨の後に架かる美しい虹のようです。"
    };
  }

  document.getElementById("result").innerHTML = `
    <div>
      <h2>${percent}%</h2>
      <div>${"❤️".repeat(hearts)}</div>
      <p>${msg[currentLang]}</p>
    </div>
  `;
}
