import {Badge, Box, Card, Flex, Grid, Heading, IconButton, Image, Spinner, Text} from "theme-ui";
import {useEffect, useState} from "react";
import {getMove, getPokemon, getPokemonSpecies} from "../utils/api";
import styled from "@emotion/styled";
import {ExtendedPokeListType, PokemonSpeciesType, PokemonType, PokeMoveType} from "../utils/type";
import {TYPE_OF_POKEMON} from "../constants/const";
import IconClose from "./icon/icon-Close";
import IconArrowRight from "./icon/icon-arrowRight";
import IconArrowDown from "./icon/icon-arrowDown";
import IconRightArrow from "./icon/icon-rightArrow";

interface PokemonProps {
    pokemon: ExtendedPokeListType
    onClose: () => void
}

const ModalContainer = styled.div<{
    type: string
}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  opacity: 1;
  width: 50%;
  background: ${props => TYPE_OF_POKEMON[props.type]?.backgroundColor};
  -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
`;


const Pokemon = ({pokemon, onClose}: PokemonProps) => {
    const {poke_detail, name} = pokemon
    const ability = poke_detail.abilities.map(({ability}) => ability.name).join(",")
    const [pokeSpecies, setPokeSpecies] = useState<PokemonSpeciesType>()
    const [preEvolution, setPreEvolution] = useState<PokemonType>()
    const [isDetailLoading, setIsDetailLoading] = useState(false)
    const [isMoveLoading, setIsMoveLoading] = useState(false)
    const [selectedMove, setSelectedMove] = useState<string>(null)
    const [moveInfo, setMoveInfo] = useState<PokeMoveType>()
    const eggGroup = pokeSpecies?.egg_groups?.map(({name}) => name).join(",")
    const type = poke_detail?.types.map(({type}) => type.name).join(",")

    useEffect(() => {
        const getPokemonDetails = async () => {
            try {
                setIsDetailLoading(true)
                const speciesResponse = await getPokemonSpecies<PokemonSpeciesType>(name)
                setPokeSpecies(speciesResponse)
                if (speciesResponse?.evolves_from_species) {
                    const prev = await getPokemon<PokemonType>(speciesResponse?.evolves_from_species?.name)
                    setPreEvolution(prev)
                }
            } finally {
                setIsDetailLoading(false)
            }
        }
        getPokemonDetails()
    }, [])
    const moveDetail = (move: string) => {
        setIsMoveLoading(true)
        getMove<PokeMoveType>(move)
            .then(moveInfo => setMoveInfo(moveInfo))
            .finally(() => setIsMoveLoading(false))
    }
    return (
        <ModalContainer type={type}>
            <Box sx={{
                opacity: 1,
                boxShadow: "0 8px 16px rgba(0,0,0,.15)",
                height: "100vh",
                width: "100vw",
                overflowY: "auto",
                pointerEvents: "auto",
                filter: "none"
            }}>
                <Flex sx={{padding: 15, justifyContent: "space-between", borderBottom: "1px solid #000000",}}>
                    <Heading as={"h2"} sx={{textTransform: "capitalize"}}>{name}</Heading>
                    <IconButton onClick={onClose} sx={{
                        background: "white",
                        borderRadius: "50%",
                        boxShadow: "0 8px 16px rgba(0,0,0,.15)",
                        cursor: "pointer"
                    }}><IconClose width={15} height={15}/></IconButton>
                </Flex>
                <Box p={10}>
                    <Flex sx={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <Image src={poke_detail.sprites.front_default}/>
                        <Flex>

                            {poke_detail?.types.map(({type}, index) => {
                                return (
                                    <Badge
                                        key={index}
                                        sx={{
                                            background: TYPE_OF_POKEMON[type.name].backgroundColor,
                                            fontSize: 12,
                                            padding: 8,
                                            borderRadius: 15,
                                            textTransform: "capitalize",
                                            marginLeft: 5,
                                            marginBottom: 15,
                                            boxShadow: "0 5px 8px #000000"
                                        }}>
                                        {type.name}
                                    </Badge>
                                )
                            })}
                        </Flex>
                    </Flex>
                    <Card>
                        <Heading as={"h4"} sx={{padding: 5, borderBottom: "1px solid lightgrey"}}>Profile</Heading>
                        <Box p={10}>
                            <Grid columns={[2]} gap={5}>
                                <Flex>
                                    <Heading as={"h5"}>Height</Heading>
                                    <Text marginLeft={5}>{poke_detail.height}</Text>
                                </Flex>
                                <Flex>
                                    <Heading as={"h5"}>Weight</Heading>
                                    <Text marginLeft={5}>{poke_detail.weight}</Text>
                                </Flex> <Flex>
                                <Heading as={"h5"}>Catch Rate</Heading>
                                <Text marginLeft={5}>{pokeSpecies?.capture_rate}</Text>
                            </Flex>
                                <Flex>
                                    <Heading as={"h5"}>Gender Rate</Heading>
                                    <Text marginLeft={5}>{pokeSpecies?.gender_rate}</Text>
                                </Flex> <Flex>
                                <Heading as={"h5"}>Egg Groups</Heading>
                                <Text marginLeft={5}>{eggGroup}</Text>
                            </Flex>
                                <Flex>
                                    <Heading as={"h5"}>Hatch Steps</Heading>
                                    <Text marginLeft={5}>{pokeSpecies?.hatch_counter}</Text>
                                </Flex>
                                <Flex>
                                    <Heading as={"h5"}>Abilities</Heading>
                                    <Text
                                        marginLeft={5}>
                                        {ability}
                                    </Text>
                                </Flex><Flex>
                                <Heading as={"h5"}>Growth Rate</Heading>
                                <Text
                                    marginLeft={5}>
                                    {pokeSpecies?.growth_rate?.name}
                                </Text>
                            </Flex>
                            </Grid>
                        </Box>
                    </Card> <Card>
                    <Heading as={"h4"} sx={{padding: 5, borderBottom: "1px solid lightgrey"}}>Evolves From</Heading>
                    {pokeSpecies?.evolves_from_species &&
                    <Box p={10}>
                        <Flex sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingLeft: 75,
                            paddingRight: 75
                        }}>
                            <Image src={preEvolution?.sprites?.front_default}/>
                            <IconRightArrow width={25} height={25}/>
                            <Image src={poke_detail?.sprites?.front_default}/>
                        </Flex>
                        <Flex sx={{justifyContent: "center"}}>
                            <Text
                                sx={{textTransform: "capitalize"}}>{` ${name} evolves from ${pokeSpecies?.evolves_from_species?.name}`}</Text></Flex>
                    </Box> ||
                    <Flex sx={{alignItems: "center", justifyContent: "center", padding: 5}}>No previous form</Flex>}
                </Card>
                    <Card>
                        <Heading as={"h4"} sx={{padding: 5, borderBottom: "1px solid lightgrey"}}>Moves</Heading>
                        <Box p={10}>
                            {poke_detail?.moves?.map(({move}) => {
                                return (
                                    <>
                                        <Grid key={move.name} columns={[1]} p={10}>
                                            <Flex sx={{justifyContent: "space-between", alignItems: "center"}}>
                                                {move?.name}
                                                <IconButton
                                                    onClick={() => {
                                                        if (move?.name === selectedMove) {
                                                            setSelectedMove(null)
                                                        } else {
                                                            setSelectedMove(move?.name)
                                                            moveDetail(move?.name)
                                                        }
                                                    }}
                                                    sx={{boxShadow: "0 8px 16px rgba(0,0,0,.15)", cursor: "pointer"}}>
                                                    {!selectedMove ? <IconArrowRight height={15} width={15}/> :
                                                        <IconArrowDown width={15} height={15}/>}
                                                </IconButton>
                                            </Flex>
                                        </Grid>

                                        {
                                            selectedMove === move?.name &&
                                            (
                                                <Box sx={{
                                                    padding: 12,
                                                    marginTop: 5,
                                                    backgroundColor: "lightgrey"
                                                }}>
                                                    {!isMoveLoading ?
                                                        <>
                                                            <Flex sx={{
                                                                justifyContent: "space-between",
                                                                marginBottom: 10
                                                            }}>
                                                                <Flex>
                                                                    <Heading as={"h4"}>Power:</Heading>
                                                                    <Text>{moveInfo?.power || "N/A"}</Text>
                                                                </Flex>
                                                                <Flex>
                                                                    <Heading as={"h4"}>Acc:</Heading>
                                                                    <Text>{moveInfo?.accuracy || "N/A"}</Text>
                                                                </Flex>
                                                                <Flex>
                                                                    <Heading as={"h4"}>PP:</Heading>
                                                                    <Text>{moveInfo?.pp || "N/A"}</Text>
                                                                </Flex>
                                                                <Flex>
                                                                    <Heading as={"h4"}>Type:</Heading>
                                                                    <Badge sx={{
                                                                        fontSize: 12,
                                                                        padding: 5,
                                                                        marginLeft: 5,
                                                                        background: TYPE_OF_POKEMON[moveInfo?.type?.name].backgroundColor
                                                                    }}>{moveInfo?.type?.name || "N/A"}</Badge>
                                                                </Flex>
                                                            </Flex>
                                                            <Text>{moveInfo?.effect_entries && moveInfo?.effect_entries[0]?.effect}</Text>
                                                        </> : <Flex sx={{justifyContent: "center"}}><Spinner/></Flex>}
                                                </Box>)
                                        }
                                    </>

                                )
                            })}
                        </Box>
                    </Card>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default Pokemon
