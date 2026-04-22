let etudiants = [
  {nom : "adnan",prenom : "elaz" , age : 21 ,moyenne : 10},
  {nom : "ramiz",prenom : "badou" , age : 23 ,moyenne : 13},
  {nom : "jaxen",prenom : "dooui" , age : 19 ,moyenne : 11},
  {nom : "adam",prenom : "elmori" , age : 20 ,moyenne : 19},
  {nom : "sdam",prenom : "houssin" , age : 21 ,moyenne : 10},
  {nom : "louis",prenom : "marks" , age : 26 ,moyenne : 20},
  ];
  
  for (var i = 0; i < etudiants.length; i++) {
    if (etudiants[i].moyenne >= 12) {
      console.log(" une moyenne supérieure ou égale à 12=>",etudiants[i].nom,etudiants[i].prenom,etudiants[i].moyenne)
    }
  }
etudiants.sort(function(a, b) {
  return a.age - b.age;
});
console.log(etudiants)

let etudiantsRechercher = "louis";
let trouvé = false

for (var i = 0; i < etudiants.length; i++) {
  if (etudiants[i].nom == etudiantsRechercher) {
    console.log(etudiants[i])
    trouvé = true;
  }
}
if (trouvé == false) {
   console.log("non trouvé !")
}