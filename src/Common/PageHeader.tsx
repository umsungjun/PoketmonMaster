import { BsSunFill } from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'
import styled from '@emotion/styled'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { POKETMON_IMAGE_TYPE } from '../Constants'
import { RootState, useAppDispatch } from '../Store'
import { changeImageType, PoketMonImageKeyType } from '../Store/imageTypeSlice'
import { changeThemeType } from '../Store/themeTypeSlice'
import { darkTheme, lightTheme } from 'src/Theme/theme'

export default function PageHeader() {
    const imageType = useSelector((state: RootState) => state.imageType.type)
    const theme = useSelector((state: RootState) => state.themeType.theme)

    const dispatch = useAppDispatch()
    const themeDispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            changeImageType({
                type: e.target.value as PoketMonImageKeyType,
            })
        )
    }
    // console.log(typeof theme)
    return (
        <Header theme={theme}>
            <Title>
                <Link to="/">Pokémon</Link>
            </Title>
            <ThemeButton
                theme={theme}
                value={theme}
                onClick={() => themeDispatch(changeThemeType())}
            >
                {theme === 'light' ? <IoMdMoon /> : <BsSunFill />}
            </ThemeButton>
            <Select value={imageType} onChange={handleChange}>
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
    ${(props) => (props.theme === 'dark' ? darkTheme.headerBorder : lightTheme.border)}
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;

    ${(props) => (props.theme === 'dark' ? darkTheme.background : lightTheme.background)}
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

const ThemeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border: none;
    cursor: pointer;
    background: none;
    font-size: 1.5rem;

    ${(props) => (props.theme === 'light' ? 'color: black;' : 'color: white;')}
`
