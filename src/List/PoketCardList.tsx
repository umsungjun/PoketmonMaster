import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../Store'
import PoketCard from './PoketCard'
import { fetchPoketmons } from '../Store/poketmonsSlice'
import useInfiniteScroll from 'react-infinite-scroll-hook'

export default function PoketCardList() {
    const dispatch = useAppDispatch()
    const theme = useSelector((state: RootState) => state.themeType.theme)
    const { poketmons } = useSelector((state: RootState) => state.poketmons)

    const [infiniteRef] = useInfiniteScroll({
        loading: false,
        hasNextPage: poketmons.next !== '',
        onLoadMore: async () => {
            dispatch(fetchPoketmons(poketmons.next))
        },
        disabled: false,
        rootMargin: '0px 0px 0px 0px',
    })

    useEffect(() => {
        dispatch(fetchPoketmons())
    }, [dispatch])

    return (
        <>
            <List theme={theme}>
                {poketmons.results.map((poketmon, index) => {
                    return <PoketCard key={`${poketmon.name}+${index}`} name={poketmon.name} />
                })}
            </List>
            <Loading ref={infiniteRef}>Loading</Loading>
        </>
    )
}

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5rem;
    margin: 0rem 0 2rem 0;
    gap: 1rem;
    ${(props) => (props.theme === 'dark' ? 'background-color: #191d24;' : '')}
`
const Loading = styled.div`
    text-align: center;
`
