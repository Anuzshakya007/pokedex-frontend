type nameUrlType = {
    name: string;
    url: string;
}
type AbititiesType = {
    is_hidden: boolean;
    slot: number;
    ability: nameUrlType;
}
type MoveType = {
    move: nameUrlType;
}
type SpritesType = {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}
export type PokemonType = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: AbititiesType[];
    moves: MoveType[];
    species: nameUrlType;
    sprites: SpritesType;
    types: { slot: number; type: nameUrlType }[];
}

export type ExtendedPokeListType = {
    poke_detail: PokemonType;
    name: string;
    url: string;
}

export type PokeListType = {
    count: number;
    next: string;
    previous: string;
    results: { name: string; url: string; }[]
}

export type PokemonSpeciesType = {
    id: number;
    name: string;
    order: number,
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: number;
    forms_switchable: boolean;
    growth_rate: nameUrlType;
    egg_groups: nameUrlType[];
    evolves_from_species: nameUrlType;
    evolution_chain: { url: string };
}

type EffectEntriesType = {
    effect: string;
    short_effect: string;
    language: nameUrlType;
}

export type PokeMoveType = {
    id: number;
    name: string;
    accuracy: number;
    pp: number;
    priority: number;
    power: number;
    effect_entries: EffectEntriesType[];
    type: nameUrlType;
}
