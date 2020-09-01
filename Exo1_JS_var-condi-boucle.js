//Les variables
    
//nombre
var nombre = 42;
console.log(nombre);

//tableau
var tab = [2, 5, 6, 7, 9];
console.log(tab);

//chaine de caracteres
var chaine = "ceci  est une chaine de caracteres";
console.log(chaine);


//Conditions

//if, else if ,else
if (nombre >= 50) {
    console.log("super moitmoit");
} else if (nombre <= 40) {
    console.log("peut mieux faire");
} else {
    console.log("la grande réponse");
}


//switch
        //A terminer plus tard
let expr = tab;
switch (expr) {
    case expr = 10 :
        console.log("il y a 10 éléments dans le tableau");
        break;
    case expr = 5 :
        console.log("il y a 5 éléments dans le tableau");
        break;
    case expr = 0 :
        console.log("le tableau est vide");
        break;
    default :
        console.log("Je ne connais pas le nombre d'éléments du tableau");
        break;
}


//Boucles
var compt = 0;
//while
while (compt < 5) {
    compt++;
    console.log("Messire, on en a gros");
}

//for
for (let i of tab) {
    console.log(i);
}