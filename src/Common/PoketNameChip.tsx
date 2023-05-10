import styled from '@emotion/styled'

interface PoketNameChipProps {
    name: string
    id: number
    color: string
}

export default function PoketNameChip(props: PoketNameChipProps) {
    const renderNumber = (id: number) => {
        if (id < 10) {
            return `00${id}`
        } else if (id < 100) {
            return `0${id}`
        } else {
            return id
        }
    }

    return (
        <Chip>
            <NumberChip color={props.color}>
                <Number>{renderNumber(props.id)}</Number>
            </NumberChip>
            <Text>{props.name}</Text>
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
    background: #fff;
`

const NumberChip = styled.div`
    padding: 4px 6px;
    background-color: ${(props) => props.color};
    border-radius: 1rem;
    opacity: 0.8;
`

const Number = styled.label`
    opacity: 1;
`

const Text = styled.label`
    margin: 0 0.5rem 0 4px;
`
