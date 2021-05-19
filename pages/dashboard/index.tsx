import {getPokemon, getPokemonList} from "../../utils/api";
import {useEffect, useState} from "react";
import {Card, Container, Flex, Grid, Heading, Image, Spinner} from "theme-ui"
import Pokemon from "../../components/Pokemon";
import InfiniteScroll from "react-infinite-scroll-component";
import {ExtendedPokeListType, PokeListType, PokemonType} from "../../utils/type";
import {TYPE_OF_POKEMON} from "../../constants/const";
import {useDebouncedCallback} from "use-debounce";
import IconPokeball from "../../components/icon/icon-pokeball";

const Home = () => {
    const [pokeList, setPokeList] = useState<ExtendedPokeListType[]>([])
    const [offset, setOffset] = useState<number>(0)
    const [count, setCount] = useState<number>(null)
    const [isDetailOpen, setIsdetailOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    const handleSearch = useDebouncedCallback((value: string) => {
        setSearch(value)
    }, 500)
    useEffect(() => {
        if (isDetailOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.overflow = "unset"
            document.body.style.pointerEvents = "auto"
        }
    }, [isDetailOpen])
    useEffect(() => {

        const getPokemonData = async () => {
            try {
                setIsLoading(true)
                const response = await getPokemonList<PokeListType>(offset);
                setCount(response.count)
                const formattedData = response?.results?.map(async pokemon => {

                    const pokeDetail = await getPokemon<PokemonType>(pokemon?.name)
                    return {...pokemon, poke_detail: pokeDetail}
                })
                const promise = await Promise.all(formattedData)
                setPokeList([...pokeList, ...promise])
            } catch (err) {
            } finally {
                setIsLoading(false)
            }

        }
        getPokemonData();
    }, [offset])

    const pokemonDetail =
        pokeList.find((poke) => poke.name === selectedPokemon)
    const filteredPokemon = pokeList.filter(pokemon => {
        return pokemon.name.toLocaleLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <Container p={15}>
                <Flex sx={{justifyContent: "space-between", marginBottom: 10}}>
                    <Flex sx={{alignItems: "center"}}>
                        <IconPokeball/>
                        <Heading as={"h2"}>Pokedex</Heading>
                    </Flex>
                    <input type={"text"} placeholder={"Search"}
                           onChange={({target}) => handleSearch(target.value)}/>
                </Flex>
                <InfiniteScroll
                    style={isDetailOpen && {filter: "blur(4px)"}}
                    next={() => setOffset(filteredPokemon.length)}
                    hasMore={filteredPokemon.length !== count}
                    loader={<Flex sx={{alignItems: "center", justifyContent: "center"}}><Spinner/></Flex>}
                    dataLength={filteredPokemon.length}>
                    <Grid gap={10} columns={[5]}>
                        {filteredPokemon?.map(pokemon => {
                            const type = pokemon?.poke_detail?.types.map(({type}) => type.name).join(",")
                            return (
                                <Card key={pokemon.name} onClick={() => {
                                    setIsdetailOpen(true)
                                    setSelectedPokemon(pokemon.name)
                                }}
                                      sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          background: TYPE_OF_POKEMON[type]?.backgroundColor,
                                          cursor: "pointer"
                                      }}>
                                    <Image src={pokemon.poke_detail.sprites.front_default}/>
                                    <Flex sx={{
                                        background: "rgba(0, 0, 0, 0.4)",
                                        color: "#FFFAFA",
                                        width: "100%",
                                        justifyContent: "center",
                                        textTransform: "capitalize"
                                    }}>
                                        <Heading as={"h5"}>{pokemon.name}</Heading>
                                    </Flex>
                                </Card>
                            )
                        })}
                    </Grid>
                </InfiniteScroll>
                {isDetailOpen && <Pokemon pokemon={pokemonDetail} onClose={() => setIsdetailOpen(false)}/>}
            </Container>

        </>
    )
}

export default Home
