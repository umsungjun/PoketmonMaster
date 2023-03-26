import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export default function PageHeader() {
    return (
        <Header>
            <Title>
                <Link to="/">Pokémon</Link>
            </Title>
            <Select>
                <option value="Official">Official</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </Select>
        </Header>
    )
}

const Header = styled.nav`
    display: flex;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #c0c0c0;
`

const Title = styled.h1`
    font-size: 2rem;
    color: #ffe800;
    text-shadow: 0px -2px blue, 2px -1px blue, 1px 0 blue, 0 1px blue;
    font-weight: 700;
`

const Select = styled.select`
    display: flex;
    margin-left: auto;
    padding: 8px 12px;
    border-radius: 8px;
`
