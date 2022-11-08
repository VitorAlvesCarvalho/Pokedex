export function traducaoTipos(value: any) {
  const type: any = {
    bug: "Pokémom inseto",
    dark: "Pokémom da escuridão",
    dragon: "Pokémom dragão",
    electric: "Pokémom elétrico",
    fairy: "Pokémom fada",
    fighting: "Pokémom lutador",
    fire: "Pokémom de fogo",
    flying: "Pokémom voador",
    ghost: "Pokémom fantasma",
    grass: "Pokémom tipo grama",
    ground: "Pokémom tipo terra",
    ice: "Pokémom tipo gelo",
    normal: "Pokémom normal",
    poison: "Pokémom venenoso",
    psychic: "Pokémom psíquico",
    rock: "Pokémom de pedra",
    steel: "Pokémom tipo metal",
    water: "Pokémom aquático"
  };

  if (!!value) {
    return type[value];
  }
  return value;
}

export function traducaoAtributos(value: any) {
  const atributos: any = {
    hp: "Vida",
    attack: "Ataque",
    defense: "Defesa",
    "special-attack": "Ataque Especial",
    "special-defense": "Defesa Especial",
    speed: "Velocidade"
  };

  if (!!value) {
    return atributos[value];
  }
  return value;
}
