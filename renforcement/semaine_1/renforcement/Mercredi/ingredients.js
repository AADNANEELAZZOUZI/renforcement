let stockIngredients = [
    { nom: "Tomate", quantite: 50, unite: "kg", prix_unitaire: 2, seuil_alerte: 10, categorie: "légume" },
    { nom: "Carotte", quantite: 30, unite: "kg", prix_unitaire: 1.5, seuil_alerte: 5, categorie: "légume" },
    { nom: "Oignon", quantite: 40, unite: "kg", prix_unitaire: 1.2, seuil_alerte: 8, categorie: "légume" },
    { nom: "Poulet", quantite: 20, unite: "kg", prix_unitaire: 5, seuil_alerte: 5, categorie: "viande" },
    { nom: "Boeuf", quantite: 15, unite: "kg", prix_unitaire: 8, seuil_alerte: 3, categorie: "viande" },
    { nom: "Agneau", quantite: 10, unite: "kg", prix_unitaire: 9, seuil_alerte: 2, categorie: "viande" },
    { nom: "Sel", quantite: 5, unite: "kg", prix_unitaire: 0.5, seuil_alerte: 1, categorie: "épice" },
    { nom: "Poivre", quantite: 2, unite: "kg", prix_unitaire: 3, seuil_alerte: 0.5, categorie: "épice" },
    { nom: "Paprika", quantite: 1, unite: "kg", prix_unitaire: 4, seuil_alerte: 0.2, categorie: "épice" },
    { nom: "Eau", quantite: 10, unite: "litres", prix_unitaire: 0.8, seuil_alerte: 20, categorie: "boisson" },
    { nom: "Jus d'orange", quantite: 2, unite: "litres", prix_unitaire: 2, seuil_alerte: 10, categorie: "boisson" },
    { nom: "Soda", quantite: 3, unite: "litres", prix_unitaire: 1.5, seuil_alerte: 15, categorie: "boisson" }
];


let totalStock = 0;
let totalStock1 = 0;


stockIngredients.forEach(function(ingredient) {
if (ingredient.seuil_alerte >= ingredient.quantite){
  console.log("quantite insufisant !!!",ingredient.nom,ingredient.quantite,"doit etre",ingredient.seuil_alerte);
}

});
stockIngredients.forEach(function(ingredient) {

totalStock += ingredient.quantite * ingredient.prix_unitaire
totalStock1 = ingredient.quantite * ingredient.prix_unitaire

console.log(ingredient.nom,"=>",ingredient.quantite,"x",ingredient.prix_unitaire,"=",totalStock1)
});
console.log("total du stock ="+totalStock)
let categorieEntre = "boisson";
console.log("===========",categorieEntre,"=============")
for (var i = 0; i < stockIngredients.length; i++) {
  if (categorieEntre === stockIngredients[i].categorie){
    console.log(stockIngredients[i].nom);
  }
    
}

let plat = {nom : "poulet paprika au four",ingredients :[{nom : "Poulet",quantite :1},{nom : "Paprika",quantite :0.2}]}
for (var i = 0; i < stockIngredients.length; i++) {
  let ingrpl = stockIngredients[i].nom;
  plat.ingredients.forEach(function(ingredient){
    if(ingredient.nom == ingrpl){
      stockIngredients[i].quantite -= ingredient.quantite
      console.log("-",ingredient.quantite,stockIngredients[i].unite,"de",ingredient.nom)
    }
  });
}
  
  stockIngredients.forEach(function(ingredient){
    console.log("ingredient =",ingredient.nom,"quantite =",ingredient.quantite)
  });
  