function listerPersonnes(personnes) {
	let out = "";
    for(let personne of personnes) {
        out += `${personne.nom} : ${personne.age} ans, `
    }
    return out.slice(0, out.length - 2) + ".";
}

// Tests
const personnes = [
	{ nom: "Alice", age: 30 },
	{ nom: "Bob", age: 25 },
	{ nom: "Charlie", age: 35 }
];

console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'