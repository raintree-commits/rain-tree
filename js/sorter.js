let currentA, currentB;
let battleCount = 0;
const totalBattles = members.length * 5;
const K = 32;

function pickBattle(){
  if(battleCount >= totalBattles){
    showResult();
    return;
  }

  const candidates = [...members]
    .sort((a,b)=>b.rating - a.rating)
    .slice(0,8)
    .sort(()=>Math.random() - 0.5);

  currentA = candidates[0];
  currentB = candidates[1];

  renderBattle();
}

function renderBattle(){
  leftImg.src = currentA.img;
  rightImg.src = currentB.img;

  leftName.innerText = currentA.name[currentLang];
  rightName.innerText = currentB.name[currentLang];

  left.onclick = () => battle(currentA, currentB);
  right.onclick = () => battle(currentB, currentA);
}

function battle(winner, loser){
  const expected =
    1 / (1 + Math.pow(10, (loser.rating - winner.rating) / 400));

  winner.rating += K * (1 - expected);
  loser.rating += K * (0 - (1 - expected));

  battleCount++;
  progress.style.width =
    (battleCount / totalBattles) * 100 + "%";

  pickBattle();
}

function showResult(){
  const ranking = [...members].sort((a,b)=>b.rating - a.rating);

  document.body.innerHTML = ranking.map((m,i)=>`
    <div>${i+1}. ${m.name[currentLang]}</div>
  `).join("");
}

pickBattle();
