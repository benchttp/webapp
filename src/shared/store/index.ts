import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { benchttpApi } from 'shared/store/apis'
import { generalSliceReducer } from './slices/general'

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    general: generalSliceReducer,
    [benchttpApi.reducerPath]: benchttpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(benchttpApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
