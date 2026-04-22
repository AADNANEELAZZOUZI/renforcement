let articles = [
  {nom : "Lait" , quantité : 3 , prixUnit : 5},
  {nom : "pain" , quantité : 5 , prixUnit : 2},
  {nom : "baguette" , quantité : 3 , prixUnit : 1.2},
  {nom : "pepsi" , quantité : 2 , prixUnit : 9}
  ];
  let prixArticle = 0;
  let prixTotal = 0;
  for (var i = 0; i < articles.length; i++) {
    prixArticle = articles[i].prixUnit * articles[i].quantité;
    prixTotal += prixArticle;
    console.log(articles[i].nom,"x",articles[i].quantité,"=",prixArticle,"dhs");
  }
  console.log("Total :",prixTotal,"dhs");