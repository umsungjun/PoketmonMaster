import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { imageTypeReducer } from './imageTypeSlice'

export const store = configureStore({
    reducer: {
        imageType: imageTypeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

/**
 * configureStore 함수는 Redux store를 생성합니다. 이 함수는 Redux DevTools와 같은 중요한 기능들을 미리 구성해놓아서 간단하게 사용할 수 있도록 만들어진 함수입니다. reducer는 store가 사용할 reducer 함수를 설정합니다. reducer는 상태(state)를 변경하는 함수로, 이 함수를 통해 상태를 업데이트할 수 있습니다.

RootState는 store의 상태(state) 타입을 정의합니다. ReturnType은 함수의 반환 타입을 가져오는 TypeScript 내장 유틸리티 타입입니다. 따라서 RootState는 store.getState() 함수의 반환 타입과 같습니다.

AppDispatch는 store.dispatch 함수의 타입을 정의합니다. 이 타입은 Redux의 Dispatch 타입과 같습니다.

useAppDispatch는 react-redux 라이브러리의 useDispatch 훅을 사용하여 Redux store의 dispatch 함수를 반환하는 함수입니다. AppDispatch 타입을 useDispatch 함수에 제네릭 타입으로 넘기면 타입 안정성을 확보할 수 있습니다. 이 함수를 사용하면 컴포넌트에서 Redux action을 dispatch할 때 useDispatch 훅을 통해 store.dispatch 함수를 사용할 수 있습니다.
 */
