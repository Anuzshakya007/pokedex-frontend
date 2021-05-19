export const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const urls = {
    pokemon: `${baseUrl}/pokemon?offset=:offset&limit=50`,
    pokemonDetail: `${baseUrl}/pokemon/:name`,
    pokemonSpecies: `${baseUrl}/pokemon-species/:name`,
    pokemonEvolution: `${baseUrl}/evolution-chain`,
    pokemonType: `${baseUrl}/type/:type`,
    pokemonForms: `${baseUrl}/pokemon-form/:name`,
    moveDetail:`${baseUrl}/move/:name`
}
