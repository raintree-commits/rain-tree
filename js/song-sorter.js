let pool = [...songs];
let result = [];
let a, b;

function next(){
  if(pool.length < 2){
    document.body.innerHTML = result.map((s,i)=>`
      <div>${i+1}. ${s.title}</div>
    `).join("");
    return;
  }
  a = pool.shift();
  b = pool.shift();
  top.src = a.embed;
  bottom.src = b.embed;
}

function pick(choice){
  if(choice==="top"){
    result.push(a);
    pool.push(b);
  } else {
    result.push(b);
    pool.push(a);
  }
  next();
}

next();
