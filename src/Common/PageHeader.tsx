import styled from '@emotion/styled'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { POKETMON_IMAGE_TYPE } from '../Constants'
import { RootState, useAppDispatch } from '../Store'
import { changeImageType, PoketMonImageKeyType } from '../Store/imageTypeSlice'

export default function PageHeader() {
    const type = useSelector((state: RootState) => state.imageType.type)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            changeImageType({
                type: e.target.value as PoketMonImageKeyType,
            })
        )
    }

    return (
        <Header>
            <Title>
                <Link to="/">Pokémon</Link>
            </Title>
            <Select value={type} onChange={handleChange}>
                <option value={POKETMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
                <option value={POKETMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
                <option value={POKETMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
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
