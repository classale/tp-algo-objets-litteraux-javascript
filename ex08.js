function afficherProprietes(obj) {
    let out = "";
	for(let [key, value] of Object.entries(obj)) {
        out += `${key}: ${value}, `;
    }
    return out.slice(0, out.length-2);
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'