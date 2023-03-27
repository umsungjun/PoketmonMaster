import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { fetchPoketmons, PoketmonListResponseType } from '../Service/PoketmonService'
import PoketCard from './PoketCard'

export default function PoketCardList() {
    const [poketmons, setPoketmons] = useState<PoketmonListResponseType>({
        count: 0,
        next: '',
        results: [],
    })

    useEffect(() => {
        ;(async () => {
            const poketmons = await fetchPoketmons()
            setPoketmons(poketmons)
        })()
    }, [])

    return (
        <List>
            {poketmons.results.map((poketmon, index) => {
                return <PoketCard key={poketmon.name} name={poketmon.name} />
            })}
        </List>
    )
}

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 2rem 0;
    gap: 1rem;
`
