let fruits = ["pomme","bannan","orange"];
console.log(fruits[1]);


let couleurs = ["noir","blanc","rouge"];
couleurs.push("violet");
console.log(couleurs);
console.log(couleurs.length)



let personne = {
    nom : "adnan",
    prenom : "el azzouzi",
    age : 10,
    ville : "Marrakech"
}

console.log(personne.nom);


let animeaux = ["chat","chien","lion","souris"];

for (i = 0 ; i < animeaux.length ; i++){
  
  
  console.log(animeaux[i]);
}




let articles = [
  {
    nom : "chausure nike",
    prix : 100,
    quantité : 3
  },
    {
    nom : "camera canon",
    prix : 2000,
    quantité : 1
  },
    {
    nom : "costum croco",
    prix : 9000,
    quantité : 3
  }
];

let total = 0; 

for (i = 0 ; i < articles.length ; i++){
  
  total += articles[i].prix * articles[i].quantité ;   
  
}

console.log(total)