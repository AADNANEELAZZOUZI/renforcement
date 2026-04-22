let songs = [
  {titre : "chabab mghribi",artiste : "toto",duréSeconde : 188.3 ,genre : "rap"},
  {titre : "suavemete",artiste : "elvis crespo",duréSeconde : 247.3 ,genre : "mexican pop"},
  {titre : "guantanamera",artiste : "compay segundo",duréSeconde : 395.4 ,genre : "mexican pop"},
  {titre : "chill",artiste : "l'inconnu",duréSeconde : 198 ,genre : "rap"},
  {titre : "lbarod",artiste : "draganov",duréSeconde : 374 ,genre : "rap"},
  {titre : "c'est la vie",artiste : "cheb khaled",duréSeconde : 441.9 ,genre : "ray"},
  {titre : "m3alem",artiste : "saad lmjared",duréSeconde :262  ,genre : "charqui"},
  {titre : "baba mimoun",artiste : "fahd ben chemsi",duréSeconde : 500 ,genre : "gnawa"},
  {titre : "beat it",artiste : "michael jackson",duréSeconde : 364 ,genre : "american pop"},
  {titre : "echec",artiste : "inkonnuftsipo",duréSeconde : 128.3 ,genre : "rap"},
  {titre : "fly me to the moon",artiste : "Franck Sinatra",duréSeconde : 150 ,genre : "jazz"}
  ];
  
  for (var i = 0; i < songs.length; i++) {
  console.log(songs[i].titre)
  }
  let onlyRap =[];
  let counter = 0;
  for (var i = 0; i < songs.length; i++) {
    if(songs[i].genre == "rap"){
      onlyRap.push(songs[i])
      counter++;
    }
  }
  console.log("==========rap=======================")
  console.log(onlyRap)
  console.log("===================================")
  
  let inMin =[];

for (var i = 0; i < songs.length; i++) {
  let song = songs[i];

  inMin.push({
    titre: song.titre,
    artiste: song.artiste,
    duréMinute: song.duréSeconde / 60,
    genre: song.genre
  });
}
console.log("==========minute==================")
console.log(inMin);
console.log("===================================")
 let totalmin = 0;
for (var i = 0; i < songs.length; i++) {
  totalmin += songs[i].duréSeconde/60;
}
console.log("===============================================");
console.log("total en min :",totalmin);
console.log("total en second :",totalmin*60);
console.log("===============================================");
let maxduré = songs[0];
for (var i = 0; i < songs.length; i++) {
  if (songs[i].duréSeconde > maxduré.duréSeconde){
    maxduré = songs[i];
    
  }
}
console.log("la la chanson la plus longue est",maxduré.titre,"avec",maxduré.duréSeconde/60,"min");
console.log("===============================================");
let depase = 0;
for (var i = 0; i < songs.length; i++) {
  if(songs[i].duréSeconde > 360){
    console.log("depase 6 min");
    depase++;
  }else{
    console.log("ne depase pas");
  }
}
console.log("===============================================");
console.log(depase,"chanson(s) depase 6 min");
console.log("===============================================");
let jazz = 0;
for (var i = 0; i < songs.length; i++) {
  if(songs[i].genre == "jazz"){
    jazz++;
  }
}
console.log("il y a",jazz,"chanson(s) de jazz");
console.log("===============================================");
songs.sort(function(a,b){
  return a.duréSeconde - b.duréSeconde;
});
console.log(songs);



