var a = prompt("Fonction 1 : Entrez un nb");
var c = parseInt(a); //convert in int
var b = 10;
function add(c,b) {
    return c+b;
}
console.log(add(c,b));

if (add(c,b) === 15) {
    var d = 15;
} else {
    var d = prompt("Fonction 2 : Entrez un autre nb");
}

var e = parseInt(d);
var f = 4;
function multi(e,f) {
    return e*f;
} 
console.log(multi(e,f));