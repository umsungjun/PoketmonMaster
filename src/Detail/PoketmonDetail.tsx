import styled from '@emotion/styled'
import PoketMarkChip from '../Common/PoketMarkChip'
import { TempImgUrl } from '../List/PoketCard'

export default function PoketmonDetail() {
    return (
        <Container>
            <ImageContainer>
                <Image src={TempImgUrl} />
            </ImageContainer>
            <Divider />
            <Body>
                <H2Title>기본 정보</H2Title>
                <Table>
                    <tbody>
                        <TableRow>
                            <TableHeader>번호</TableHeader>
                            <td>1</td>
                        </TableRow>
                        <TableRow>
                            <TableHeader>이름</TableHeader>
                            <td>피카츄</td>
                        </TableRow>
                    </tbody>
                </Table>

                <H2Title>능력치</H2Title>
                <Table>
                    <tbody>
                        <TableRow>
                            <TableHeader>hp</TableHeader>
                            <td>45</td>
                        </TableRow>
                        <TableRow>
                            <TableHeader>attack</TableHeader>
                            <td>49</td>
                        </TableRow>
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
    margin: 1rem 2rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 1px 1px #c0c0c0;
`

const ImageContainer = styled.section`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
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
