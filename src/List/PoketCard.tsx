import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PoketMarkChip from '../Common/PoketMarkChip'
import PoketNameChip from '../Common/PoketNameChip'
import { fetchPoketmonDetail } from '../Store/poketmonDetailSlice'

import { FaQuestion } from 'react-icons/fa'
import { useIntersectionObserver } from 'react-intersection-observer-hook'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../Store'
import { darkTheme, lightTheme } from 'src/Theme/theme'

interface PoketCardProps {
    name: string
}

export default function PoketCard(props: PoketCardProps) {
    const theme = useSelector((state: RootState) => state.themeType.theme)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const imageType = useSelector((state: RootState) => state.imageType.type)
    const [ref, { entry }] = useIntersectionObserver()
    const isVisible = entry && entry.isIntersecting
    const { poketmonDetails } = useSelector((state: RootState) => state.poketmonDetail)
    const poketmon = poketmonDetails[props.name]
    const handleCLick = () => {
        navigate(`/poketmon/${props.name}`)
    }

    useEffect(() => {
        if (!isVisible) {
            return
        }

        dispatch(fetchPoketmonDetail(props.name))
    }, [dispatch, props.name, isVisible])

    if (!poketmon) {
        return (
            <Item color={'#c0c0c0'} ref={ref}>
                <Header>
                    <PoketNameChip name={'???'} color={'#fff'} id={0} />
                </Header>
                <Body>
                    <FaQuestion />
                </Body>
                <Footer>
                    <PoketMarkChip />
                </Footer>
            </Item>
        )
    }

    return (
        <Item theme={theme} onClick={handleCLick} color={poketmon.color} ref={ref}>
            <Header>
                <PoketNameChip name={poketmon.koreanName} color={poketmon.color} id={poketmon.id} />
            </Header>
            <Body>
                <Image src={poketmon.images[imageType]} alt={poketmon.name} />
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

    ${(props) => (props.theme === 'dark' ? darkTheme.border : lightTheme.border)}
    width: 250px;
    height: 300px;
    ${(props) => (props.theme === 'dark' ? darkTheme.boxShadow : lightTheme.boxShadow)}

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

    svg {
        font-size: 3rem;
    }
`
const Image = styled.img`
    width: 180px;
    height: 180px;
`

const Footer = styled.section`
    display: flex;
`
