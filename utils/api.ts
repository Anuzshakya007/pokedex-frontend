import axios from "axios"
import {urls} from "../constants/url";

const config = {
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    timeout: 60000
}

const httpClient = axios.create({
    ...config,
    transformRequest: [
        function (data: any, headers: any) {
            headers.Accept = "application/json"
            return data
        }
    ]
})

export const getPokemonList = <T>(offset = 0) =>
    httpClient.get<T>(urls.pokemon.replace(":offset", offset.toString()))
        .then(res => res.data)

export const getPokemon = <T>(name: string) =>
    httpClient.get<T>(urls.pokemonDetail.replace(":name", name)).then(res => res?.data)

export const getPokemonSpecies = <T>(name: string) =>
    httpClient.get<T>(urls.pokemonSpecies.replace(":name", name)).then(res => res?.data)

export const getEvolutionChain = <T>(id: number) =>
    httpClient.get<T>(`${urls.pokemonEvolution}/${id}`).then(res => res?.data)

export const getTypeDetail = <T>(type: string) =>
    httpClient.get<T>(urls.pokemonType.replace(":type", type)).then(res => res?.data)

export const getPokemonForms = <T>(name: string) =>
    httpClient.get<T>(urls.pokemonForms.replace(":name", name)).then(res => res?.data)

export const getMove = <T>(name: string) =>
    httpClient.get<T>(urls.moveDetail.replace(":name", name)).then(res => res?.data)



