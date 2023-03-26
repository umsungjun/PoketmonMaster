import PoketCardList from './List/PoketCardList'
import { Routes, Route } from 'react-router-dom'
import PoketmonDetail from './Detail/PoketmonDetail'

export default function PageNavigator() {
    return (
        <Routes>
            <Route path="/" element={<PoketCardList />} />
            <Route path="/poketmon/:name" element={<PoketmonDetail />} />
        </Routes>
    )
}
