let contacts = [
    {nom : "adnan", entreprise : "decobain",email : "adnan@gmail.com",adress : {rue : "massira3",code_postal:"41234",ville : "marrakech",pays: "maroc"}},
    {nom : "Maroih", entreprise : "orange",email : "maroih@gmail.com",adress : {rue : "rue de paix",code_postal:"40132",ville : "parix",pays: "france"}},
    {nom : "anass", entreprise : "vitra",email : "anas@gmail.com",adress : {rue : "abwabmarrakech",code_postal:"40132",ville : "marrakech",pays: "maroc"}},
    {nom : "aymen", entreprise : "norsys",email : "aymen@gmail.com",adress : {rue : "dawdiyet",code_postal:"40992",ville : "marrakech",pays: "maroc"}},
    {nom : "reda", entreprise : "dell",email : "reda@gmail.com",adress : {rue : "derb mila",code_postal:"60761",ville : "casablanca",pays: "maroc"}},
    {nom : "ghassan", entreprise : "letcode",email : "ghassan@gmail.com",adress : {rue : "capo",code_postal:"30945",ville : "tanger",pays: "maroc"}}
];

console.log("Nom  Ville");
contacts.forEach(c => {
  console.log(c.nom + " - " + c.adress.ville);
});


console.log("Regrouper par ville");
let contactsParVille = {};
contacts.forEach(c => {
  let ville = c.adress.ville;
  if(!contactsParVille[ville]) contactsParVille[ville] = [];
  contactsParVille[ville].push(c.nom);
});
console.log(contactsParVille);


console.log("Chercher par entreprise (orange)");
function chercherParEntreprise(entreprise){
  return contacts.filter(c => c.entreprise === entreprise);
}
console.log(chercherParEntreprise("orange"));


console.log("Modifier adresse (adnan déménage)");
function modifierAdresse(nom, newAdresse){
  let contact = contacts.find(c => c.nom === nom);
  if(contact) contact.adress = newAdresse;
}

modifierAdresse("adnan", {
  rue: "nouvelle rue",
  code_postal: "10000",
  ville: "rabat",
  pays: "maroc"
});
console.log(contacts);


console.log("Ajouter dernierContact");
contacts.forEach(c => {
  c.dernierContact = new Date();
});
console.log(contacts);


console.log("Contacts inactifs plus 30 jours");
function contactsInactifs(){
  let today = new Date();
  return contacts.filter(c => {
    let diff = (today - new Date(c.dernierContact)) / (1000*60*60*24);
    return diff > 30;
  });
}
console.log(contactsInactifs());