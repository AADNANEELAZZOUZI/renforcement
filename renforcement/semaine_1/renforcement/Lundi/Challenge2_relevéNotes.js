let eleves = [
  { 
    nom: "adnan", note: 10 
    
  },
  { 
    nom: "sami", note: 20
  },
  { 
    nom: "maroih", note: 5
  }
];

let totalNote = 0;
let max = eleves[0].note;
let min = eleves[0].note;
let counter = 0;

for (let i = 0; i < eleves.length; i++) {
  let n = eleves[i].note;
  console.log(n)


  totalNote += n;

  if (n > max) {
    max = n;
  }

  if (n < min) {
    min = n;
  }

  if (n >= 10) {
    counter++;
  }
}

let moyen = totalNote / eleves.length;
console.log("=============================");
console.log("total =", totalNote);
console.log("=============================");
console.log("moyenne =", moyen);
console.log("=============================");
console.log("max=", max);
console.log("=============================");
console.log("min =", min);
console.log('total des sucsses',counter)