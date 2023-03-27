import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PoketMarkChip from '../Common/PoketMarkChip'
import PoketNameChip from '../Common/PoketNameChip'
import { fetchPoketmonDetail, PoketmonDetailType } from '../Service/PoketmonService'

interface PoketCardProps {
    name: string
}

export default function PoketCard(props: PoketCardProps) {
    const navigate = useNavigate()
    const [poketmon, setPoketmons] = useState<PoketmonDetailType | null>(null)

    const handleCLick = () => {
        navigate(`/poketmon/${props.name}`)
    }

    useEffect(() => {
        ;(async () => {
            const detail = await fetchPoketmonDetail(props.name)
            setPoketmons(detail)
        })()
    }, [props.name])

    if (!poketmon) {
        return null // TODO 화면이 로딩 중
    }

    return (
        <Item onClick={handleCLick} color={poketmon.color}>
            <Header>
                <PoketNameChip name={poketmon.koreanName} color={poketmon.color} id={poketmon.id} />
            </Header>
            <Body>
                <Image src={poketmon.images.dreamWorldFront} alt={poketmon.name} />
            </Body>
            <Footer>
                <PoketMarkChip />
            </Footer>
        </Item>
    )
}

const Item = styled.li`
    display: flex;
    flex-direction: column;

    padding: 0.5rem;

    border: 1px solid #c0c0c0;
    width: 250px;
    height: 300px;
    box-shadow: 1px 1px 3px 1px #c0c0c0;

    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        background-color: ${(props) => props.color};
        opacity: 0.8;
        transition: background-color 0s;
    }
`

const Header = styled.section`
    display: flex;
    margin: 0.5rem 0;
`

const Body = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    flex: 1 1 0;
`
const Image = styled.img`
    width: 180px;
    height: 180px;
`

const Footer = styled.section`
    display: flex;
`
