import styled from '@emotion/styled'

export default function PoketNameChip() {
    return (
        <Chip>
            <NumberChip>
                <Number>001</Number>
            </NumberChip>
            <Text>이상해씨</Text>
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
`

const NumberChip = styled.div`
    padding: 4px 6px;
    background-color: yellow;
    border-radius: 1rem;
    opacity: 0.8;
`

const Number = styled.label`
    opacity: 1;
`

const Text = styled.label`
    margin: 0 0.5rem 0 4px;
`
