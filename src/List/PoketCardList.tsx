import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchPoketmons, PoketmonListResponseType } from '../Service/PoketmonService'
import { RootState } from '../Store'
import PoketCard from './PoketCard'

export default function PoketCardList() {
    const theme = useSelector((state: RootState) => state.themeType.theme)
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
        <List theme={theme}>
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
    padding-top: 5rem;
    margin: 0rem 0 2rem 0;
    gap: 1rem;
    ${(props) => (props.theme === 'dark' ? 'background-color: #191d24;' : '')}
`
