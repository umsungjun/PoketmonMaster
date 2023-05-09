import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PoketMarkChip from '../Common/PoketMarkChip'

import { FaQuestion } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '../Store'
import { fetchPoketmonDetail } from '../Store/poketmonDetailSlice'
import KakaoShareButton from 'src/Common/KakaoShareButton'

export default function PoketmonDetail() {
    const imageType = useSelector((state: RootState) => state.imageType.type)
    const { name } = useParams()
    const dispatch = useAppDispatch()
    const { poketmonDetails } = useSelector((state: RootState) => state.poketmonDetail)
    const poketmon = name ? poketmonDetails[name] : null

    useEffect(() => {
        if (!name) return

        dispatch(fetchPoketmonDetail(name))
    }, [name])

    if (!name || !poketmon) {
        return (
            <Container>
                <ImageContainer>
                    <FaQuestion />
                </ImageContainer>
                <Divider />
                <NoinfoBody>등록된 정보가 없습니다.</NoinfoBody>
                <Footer>
                    <PoketMarkChip />
                </Footer>
            </Container>
        )
    }

    return (
        <Container>
            <KakaoShareButton />
            <ImageContainer>
                <Image src={poketmon.images[imageType]} alt={poketmon.koreanName} />
            </ImageContainer>
            <Divider />
            <Body>
                <H2Title>기본 정보</H2Title>
                <Table>
                    <tbody>
                        <TableRow>
                            <TableHeader>번호</TableHeader>
                            <td>{poketmon.id}</td>
                        </TableRow>
                        <TableRow>
                            <TableHeader>이름</TableHeader>
                            <td>{`${poketmon.koreanName}(${poketmon.name})`}</td>
                        </TableRow>
                        <TableRow>
                            <TableHeader>타입</TableHeader>
                            <td>{poketmon.types.toString()}</td>
                        </TableRow>
                        <TableRow>
                            <TableHeader>키</TableHeader>
                            <td>{`${poketmon.height}m`}</td>
                        </TableRow>
                        <TableRow>
                            <TableHeader>몸무게</TableHeader>
                            <td>{`${poketmon.weight}kg`}</td>
                        </TableRow>
                    </tbody>
                </Table>

                <H2Title>능력치</H2Title>
                <Table>
                    <tbody>
                        {poketmon.baseStats.map((stat) => {
                            return (
                                <TableRow key={stat.name}>
                                    <TableHeader>{stat.name}</TableHeader>
                                    <td>{stat.value}</td>
                                </TableRow>
                            )
                        })}
                    </tbody>
                </Table>
            </Body>
            <Footer>
                <PoketMarkChip />
            </Footer>
        </Container>
    )
}

const Container = styled.section`
    border: 1px solid #c0c0c0;
    margin: 0 1rem 2rem;
    border-radius: 1rem;
    box-shadow: 0px 1px 5px 1px #c0c0c0;
    margin-top: 6rem;
`

const ImageContainer = styled.section`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    min-height: 25rem;

    svg {
        font-size: 3rem;
    }
`

const Image = styled.img`
    width: 28rem;
    height: 28rem;
`

const Divider = styled.hr`
    margin: 2rem;
    border-style: none;
    border-top: 1px dashed #c0c0c0;
`

const Body = styled.section`
    margin: 0 2rem;
`

const NoinfoBody = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 15rem;
    font-size: 2rem;
`

const H2Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 1rem auto;
    text-align: left;

    th,
    td {
        padding: 6px 12px;
    }
`

const TableRow = styled.tr`
    // // border-width: 1px 0;
    // // border-style: solid;
    border: 1px solid #f0f0f0;
`

const TableHeader = styled.th`
    width: 1px;
    white-space: nowrap;
    text-align: left;
    font-weight: normal;
    font-size: 1rem;
    color: #a0a0a0;
`

const Footer = styled.section`
    display: flex;
    margin: 2rem 1rem;
`
