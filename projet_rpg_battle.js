var monstre = document.getElementById("monstre_1");
var heros = document.getElementById("personnage_1");
var attaque = document.getElementById("attaque");
var soin = document.getElementById("soin");
var valeur_pv_monstre_1 = document.getElementById("vie_monstre_1");
var valeur_pv_personnage_1 = document.getElementById("vie_personnage_1")

var pv_monstre = 100;
var pv_heros = 100;
var valeur_attaque = 25;
var attaque_monstre = 20;
var valeur_soin = 25;

attaque.onclick = function (){
  if (pv_monstre > 0 && pv_heros > 0){
    pv_monstre = pv_monstre - valeur_attaque;
    valeur_pv_monstre_1.innerHTML = "PV Monstre: " + pv_monstre;
    pv_heros = pv_heros - attaque_monstre;
    valeur_pv_personnage_1.innerHTML = "PV Joueur: " + pv_heros;
  }
  if (pv_monstre <= 0){
    monstre.innerHTML = "";
    return;
  }
  if (pv_heros <= 0){
    heros.innerHTML = "";
    return;
    }
}
  
soin.onclick = function (){
  if (pv_monstre > 0 && pv_heros > 0){
    if (pv_heros > 80){
      pv_heros = 100;
      pv_heros = pv_heros - attaque_monstre;
      valeur_pv_personnage_1.innerHTML = "PV Joueur: " + pv_heros;
    }
    else {
      pv_heros = pv_heros + valeur_soin;
      pv_heros = pv_heros - attaque_monstre;
      valeur_pv_personnage_1.innerHTML = "PV Joueur: " + pv_heros;
    }
  }
}