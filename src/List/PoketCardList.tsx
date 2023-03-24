import styled from '@emotion/styled'
import PoketCard from './PoketCard'

export default function PoketCardList() {
    return (
        <List>
            {Array.from({ length: 10 }).map((_, index) => {
                return <PoketCard key={index} />
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
