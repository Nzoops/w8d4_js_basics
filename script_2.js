let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log('Le résultat est : ' + factorial);