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

export const fetchPoketmons = async () => {
    const defaultURL = 'https://pokeapi.co/api/v2/pokemon'

    const response = await remote.get<PoketmonListResponseType>(defaultURL)

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

export const fetchPoketmonDetail = async (name: string): Promise<PoketmonDetailType> => {
    const poketmonDetailURL = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await remote.get<PoketmonDetailResponseType>(poketmonDetailURL)
    const detail = response.data

    return {
        id: detail.id,
        name: detail.name,
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
