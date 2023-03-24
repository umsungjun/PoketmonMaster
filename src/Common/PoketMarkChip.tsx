import styled from '@emotion/styled'

export default function PoketMarkChip() {
    return (
        <Chip>
            <Text>Pokémon</Text>
        </Chip>
    )
}

const Chip = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid #c0c0c0;
    border-radius: 1rem;

    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0.5px 0.5px 0 0 #c0c0c0;

    margin-left: auto;
    margin-right: 0.2rem;
`

const Text = styled.label`
    padding: 0.1rem 0.5rem;
`
