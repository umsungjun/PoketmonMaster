import axios from 'axios'

const remote = axios.create()

export interface PoketmonListResponseType {
    count: number
    next: string
    results: {
        name: string
        url: string
    }[]
}

{
    "rewrites": [{ "source": "/api/(.*)", "destination": "/api/404.js" }]
  }

export const fetchPoketmonsAPI = async (nextUrl?: string) => {
    const requestUrl = nextUrl ? nextUrl : 'https://pokeapi.co/api/v2/pokemon'

    const response = await remote.get<PoketmonListResponseType>(requestUrl)

    return response.data
}

interface PoketmonDetailResponseType {
    id: number
    weight: number
    height: number
    name: string
    types: {
        type: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
        other: {
            dream_world: {
                front_default: string
            }
            'official-artwork': {
                front_default: string
            }
        }
    }
    stats: {
        base_stat: number
        stat: {
            name: string
        }
    }[]
}

export interface PoketmonDetailType {
    id: number
    weight: number
    height: number
    name: string
    koreanName: string
    color: string
    types: string[]
    images: {
        frontDefault: string
        dreamWorldFront: string
        officialArtworkFront: string
    }
    baseStats: {
        name: string
        value: number
    }[]
}

interface PoketmonSpeciesResponseType {
    color: {
        name: string
    }
    names: {
        name: string
        language: {
            name: string
        }
    }[]
}

export const fetchPoketmonDetailApi = async (name: string): Promise<PoketmonDetailType> => {
    const poketmonDetailURL = `https://pokeapi.co/api/v2/pokemon/${name}`
    const poketmonSpeciesURL = ` https://pokeapi.co/api/v2/pokemon-species/${name}`

    const response = await remote.get<PoketmonDetailResponseType>(poketmonDetailURL)
    const speciesReponse = await remote.get<PoketmonSpeciesResponseType>(poketmonSpeciesURL)

    const detail = response.data
    const species = speciesReponse.data
    return {
        id: detail.id,
        name: detail.name,
        koreanName: species.names.find((item) => item.language.name === 'ko')?.name ?? detail.name,
        color: species.color.name,
        height: detail.height / 10,
        weight: detail.weight / 10,
        types: detail.types.map((item) => item.type.name),
        images: {
            frontDefault: detail.sprites.front_default,
            dreamWorldFront: detail.sprites.other.dream_world.front_default,
            officialArtworkFront: detail.sprites.other['official-artwork'].front_default,
        },
        baseStats: detail.stats.map((item) => {
            return {
                name: item.stat.name,
                value: item.base_stat,
            }
        }),
    }
}
