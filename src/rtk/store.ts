import { configureStore } from '@reduxjs/toolkit'
import windows from './slices/WindowsSlice'
import width from './slices/WidthSlice'

export const store = configureStore({
  reducer: {
    windows,
    width,
  },
})

export type RootState = ReturnType<typeof store.getState>