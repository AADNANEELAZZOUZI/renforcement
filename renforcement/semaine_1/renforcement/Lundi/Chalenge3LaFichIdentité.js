let personne =
  {
    nom : "adnan",
    prenom : "el azzouzi",
    age : 21,
    ville : "Marrakech",
    email : "adnan@gmail.com"
  };
  
  console.log("je mappele ",personne.nom,personne.prenom,"j'ai",personne.age,"ans ,j'habite a",personne.ville,".")
  personne.ville = "taza";
  console.log(personne);
  numero = {numeroTel : "0687898009"}
  Object.assign(personne,numero)
  console.log(personne);