let escolhaDoTreinador = 1;
let pokemonEscolhido;

if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else {
    pokemonEscolhido = "Mewtwo";
}

console.log("Você escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");