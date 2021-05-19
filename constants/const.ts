const fire = "#F08031"
const water = "#6890F0"
const grass = "#78C851"
const rock = "#B7A038"
const ice = "#98D8D8"
const ground = "#E0C068"
const flying = "#A890F0"
const ghost = "#705898"
const dark = "#705848"
const psychic = "#F85888"
const fighting = "#C03128"
const electric = "#F8D030"
const poison = "#A040A1"
const fairy = "#F0B6BC"
const bug = "#A8B820"
const dragon = "#7037F8"
const normal = "#A8A878"
const steel = "#B8B8D0"

export const TYPE_OF_POKEMON = {
    "fire": {text: "#ffffff", backgroundColor: fire},
    "water": {text: "#ffffff", backgroundColor: water},
    "grass": {text: "#ffffff", backgroundColor: grass},
    "rock": {text: "#ffffff", backgroundColor: rock},
    "ice": {text: "#ffffff", backgroundColor: ice},
    "ground": {text: "#ffffff", backgroundColor: ground},
    "flying": {text: "#ffffff", backgroundColor: flying},
    "ghost": {text: "#ffffff", backgroundColor: ghost},
    "dark": {text: "#ffffff", backgroundColor: dark},
    "psychic": {text: "#ffffff", backgroundColor: psychic},
    "fighting": {text: "#ffffff", backgroundColor: fighting},
    "electric": {text: "#ffffff", backgroundColor: electric},
    "poison": {text: "#ffffff", backgroundColor: poison},
    "fairy": {text: "#ffffff", backgroundColor: fairy},
    "bug": {text: "#ffffff", backgroundColor: bug},
    "dragon": {text: "#ffffff", backgroundColor: dragon},
    "normal": {text: "#ffffff", backgroundColor: normal},
    "steel": {text: "#ffffff", backgroundColor: steel},
    "grass,poison": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${poison})`
    },
    "fire,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${flying})`
    },
    "bug,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${flying})`
    },
    "bug,poison": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${poison})`
    },
    "normal,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${flying})`
    },
    "poison,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${ground})`
    },
    "normal,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${fairy})`
    },
    "poison,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${poison}, ${flying})`
    },
    "water,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${fighting})`
    },
    "water,poison": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${poison})`
    },
    "rock,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${rock}, ${ground})`
    },
    "ground,rock": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${rock})`
    },
    "water,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${psychic})`
    },
    "electric,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${electric}, ${steel})`
    },
    "water,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${ice})`
    },
    "ghost,poison": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${ghost}, ${poison})`
    },
    "bug,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${bug}, ${grass})`
    },
    "grass,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${psychic})`
    },
    "grass,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${grass}, ${flying})`
    },
    "psychic,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${psychic}, ${fairy})`
    },
    "ice,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${psychic})`
    },
    "water,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${flying})`
    },
    "rock,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${rock}, ${water})`
    },
    "rock,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${rock}, ${flying})`
    },
    "ice,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${ice}, ${flying})`
    },
    "electric,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${electric}, ${flying})`
    },
    "dragon,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${dragon}, ${flying})`
    },
    "water,electric": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${electric})`
    },
    "fairy,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${fairy}, ${flying})`
    },
    "psychic,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${psychic}, ${flying})`
    },
    "dark,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${dark}, ${flying})`
    },
    "water,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${fairy})`
    },
    "water,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${water}, ${ground})`
    },
    "normal,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${normal}, ${psychic})`
    },
    "bug,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${bug}, ${steel})`
    },
    "ground,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right, ${ground}, ${flying})`
    },
    "steel,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${ground})`
    },
    "bug,rock": {text: "#ffffff", backgroundColor: `linear-gradient(to bottom right,${bug}, ${rock})`},
    "bug,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${fighting})`
    },
    "dark,ice": {text: "#ffffff", backgroundColor: `linear-gradient(to bottom right,${dark}, ${ice})`},
    "fire,rock": {text: "#ffffff", backgroundColor: `linear-gradient(to bottom right,${fire}, ${rock})`},
    "ice,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${ground})`
    },
    "water,rock": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${rock})`
    },
    "steel,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${flying})`
    },
    "dark,fire": {text: "#ffffff", backgroundColor: `linear-gradient(to bottom right,${dark}, ${fire})`},
    "water,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${dragon})`
    },
    "rock,dark": {text: "#ffffff", backgroundColor: `linear-gradient(to bottom right,${rock}, ${dark})`},
    "psychic,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${grass})`
    },
    "fire,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${fighting})`
    },
    "water,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${grass})`
    },
    "grass,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${dark})`
    },
    "bug,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${water})`
    },
    "grass,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${fighting})`
    },
    "bug,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${ground})`
    },
    "bug,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${ghost})`
    },
    "dark,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${ghost})`
    },
    "steel,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${fairy})`
    },
    "steel,rock": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${rock})`
    },
    "fighting,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${psychic})`
    },
    "water,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${dark})`
    },
    "fire,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${ground})`
    },
    "ground,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${dragon})`
    },
    "rock,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${psychic})`
    },
    "ground,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${psychic})`
    },
    "rock,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${grass})`
    },
    "rock,bug": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${bug})`
    },
    "ice,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${water})`
    },
    "steel,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${psychic})`
    },
    "dragon,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${psychic})`
    },
    "grass,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${ground})`
    },
    "water,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${steel})`
    },
    "normal,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${water})`
    },
    "rock,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${steel})`
    },
    "ghost,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${flying})`
    },
    "poison,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${dark})`
    },
    "ghost,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${dark})`
    },
    "dragon,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${ground})`
    },
    "fighting,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${steel})`
    },
    "poison,bug": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${bug})`
    },
    "poison,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${fighting})`
    },
    "grass,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${ice})`
    },
    "psychic,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${fighting})`
    },
    "ice,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${ghost})`
    },
    "electric,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${ghost})`
    },
    "steel,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${dragon})`
    },
    "fire,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${steel})`
    },
    "ghost,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${dragon})`
    },
    "psychic,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${fire})`
    },
    "ground,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${steel})`
    },
    "grass,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${fairy})`
    },
    "ground,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${dark})`
    },
    "dark,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${fighting})`
    },
    "normal,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${grass})`
    },
    "water,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${ghost})`
    },
    "bug,electric": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${electric})`
    },
    "grass,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${steel})`
    },
    "ghost,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${fire})`
    },
    "ground,electric": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${electric})`
    },
    "ground,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${ghost})`
    },
    "dark,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${steel})`
    },
    "dark,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${dragon})`
    },
    "bug,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${fire})`
    },
    "steel,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${fighting})`
    },
    "rock,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${fighting})`
    },
    "dragon,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${fire})`
    },
    "dragon,electric": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${electric})`
    },
    "dragon,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${ice})`
    },
    "fire,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${psychic})`
    },
    "normal,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${ground})`
    },
    "fire,normal": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${normal})`
    },
    "fighting,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${dark})`
    },
    "steel,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${steel}, ${ghost})`
    },
    "dark,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${psychic})`
    },
    "poison,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${water})`
    },
    "poison,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${dragon})`
    },
    "electric,normal": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${normal})`
    },
    "rock,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${dragon})`
    },
    "rock,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${ice})`
    },
    "fighting,flying": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${flying})`
    },
    "electric,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${fairy})`
    },
    "rock,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${fairy})`
    },
    "ghost,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${grass})`
    },
    "flying,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${flying}, ${dragon})`
    },
    "psychic,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${ghost})`
    },
    "fire,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${water})`
    },
    "grass,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${ghost})`
    },
    "fire,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${dark})`
    },
    "fighting,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${ice})`
    },
    "bug,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${fairy})`
    },
    "water,bug": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${water}, ${bug})`
    },
    "poison,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${fire})`
    },
    "normal,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${fighting})`
    },
    "ghost,ground": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${ground})`
    },
    "fire,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${dragon})`
    },
    "ghost,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ghost}, ${fairy})`
    },
    "normal,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${normal}, ${dragon})`
    },
    "dragon,fighting": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${fighting})`
    },
    "psychic,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${steel})`
    },
    "rock,poison": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${poison})`
    },
    "fighting,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${ghost})`
    },
    "fire,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${ghost})`
    },
    "flying,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${flying}, ${steel})`
    },
    "bug,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${bug}, ${psychic})`
    },
    "rock,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${fire})`
    },
    "grass,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${grass}, ${dragon})`
    },
    "flying,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${flying}, ${water})`
    },
    "electric,poison": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${poison})`
    },
    "fire,bug": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fire}, ${bug})`
    },
    "dark,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${fairy})`
    },
    "dark,normal": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${normal})`
    },
    "ice,bug": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${bug})`
    },
    "psychic,normal": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${normal})`
    },
    "electric,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${dark})`
    },
    "electric,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${dragon})`
    },
    "electric,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${ice})`
    },
    "dragon,ghost": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${ghost})`
    },
    "dark,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dark}, ${grass})`
    },
    "electric,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${fire})`
    },
    "electric,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${water})`
    },
    "electric,grass": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${grass})`
    },
    "dragon,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${dragon}, ${fairy})`
    },
    "ground,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ground}, ${fire})`
    },
    "psychic,dark": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${dark})`
    },
    "electric,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${electric}, ${psychic})`
    },
    "ice,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${steel})`
    },
    "ice,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${fairy})`
    },
    "rock,electric": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${rock}, ${electric})`
    },
    "psychic,dragon": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${dragon})`
    },
    "poison,psychic": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${psychic})`
    },
    "poison,fairy": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${poison}, ${fairy})`
    },
    "ice,fire": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${ice}, ${fire})`
    },
    "fairy,steel": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fairy}, ${steel})`
    },
    "fighting,water": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${fighting}, ${water})`
    },
    "psychic,ice": {
        text: "#ffffff",
        backgroundColor: `linear-gradient(to bottom right,${psychic}, ${ice})`
    },
}
