document.addEventListener("DOMContentLoaded", () => {

  /* ========= ELEMENT ========= */
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  const leftImg = document.getElementById("leftImg");
  const rightImg = document.getElementById("rightImg");

  const leftName = document.getElementById("leftName");
  const rightName = document.getElementById("rightName");

  const progress = document.getElementById("progress");

  /* ========= CONFIG ========= */
  const K = 32;
  const totalBattles = members.length * 5;

  let battleCount = 0;
  let currentA = null;
  let currentB = null;

  /* ========= INIT RATING ========= */
  members.forEach(m => {
    if (typeof m.rating !== "number") {
      m.rating = 1000;
    }
  });

  /* ========= CORE ========= */
  function pickBattle() {
    if (battleCount >= totalBattles) {
      showResult();
      return;
    }

    const pool = [...members]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8)
      .sort(() => Math.random() - 0.5);

    currentA = pool[0];
    currentB = pool[1];

    renderBattle();
  }

  function renderBattle() {
    if (!currentA || !currentB) return;

    leftImg.src = "../assets/members/" + currentA.img;
    rightImg.src = "../assets/members/" + currentB.img;

    leftName.textContent = currentA.name[currentLang];
    rightName.textContent = currentB.name[currentLang];

    left.onclick = () => vote(currentA, currentB);
    right.onclick = () => vote(currentB, currentA);
  }

  function vote(winner, loser) {
    const expected =
      1 / (1 + Math.pow(10, (loser.rating - winner.rating) / 400));

    winner.rating += K * (1 - expected);
    loser.rating += K * (0 - (1 - expected));

    battleCount++;
    progress.style.width =
      Math.round((battleCount / totalBattles) * 100) + "%";

    pickBattle();
  }

  /* ========= RESULT ========= */
  function showResult() {
    const ranking = [...members].sort((a, b) => b.rating - a.rating);

    document.body.innerHTML = `
      <div class="max-w-xl mx-auto p-4">
        <h2 class="text-2xl font-bold text-center text-[#3ccfcf] mb-4">
          Hasil Sorter
        </h2>
        <div class="space-y-2">
          ${ranking.map((m, i) => `
            <div class="flex items-center gap-3 bg-white p-2 rounded-xl shadow">
              <span class="w-6 text-center font-bold">${i + 1}</span>
              <img src="../assets/members/${m.img}"
                   class="w-12 h-12 rounded-lg object-cover">
              <span class="font-semibold">
                ${m.name[currentLang]}
              </span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  /* ========= START ========= */
  pickBattle();

});
