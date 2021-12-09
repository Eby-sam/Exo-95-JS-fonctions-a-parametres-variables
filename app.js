let result = document.getElementById("result");
let result2 = document.getElementById("result2");

function MaFonction(...Mvalues) {
    result.innerHTML = "salut ";
    for (let values of Mvalues) {
        result.innerHTML += values + ", ";
    }
    result.innerHTML = result.innerHTML.trim().slice(0, -1);
}

MaFonction("tsunade", "mei", "karui");
MaFonction("tsunade", "mei", "karui", "leina", "izumi");

function MonCalcul(...myNumber) {
    let somme = 0;
    for (let number of myNumber) {
        somme += number;
    }
    return parseInt(somme);
}

result2.innerHTML = MonCalcul(4,5,6,8,0,4) + "<br/>";
result2.innerHTML += MonCalcul(5,8,12) + "<br>";
result2.innerHTML += MonCalcul(5,7,3,6,2,4,0,19);

function MonCalculMultiply(...monNumber) {
    let totaux = 0;
    for (let number of monNumber) {
        totaux += number;
    }
    return parseInt(totaux * 11.76);
}
let newD = document.createElement("div");
newD.innerHTML += MonCalculMultiply(4,5,8,3) + "<br>";
document.body.append(newD);