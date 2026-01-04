let currentLang = localStorage.getItem("lang") || "id";

function setLang(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.innerText = langData[lang][el.dataset.i18n];
  });
}
