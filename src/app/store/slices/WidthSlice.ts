import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: { width: number } = {
  width: window.innerWidth,
}

const WidthSlice = createSlice({
  name: 'width',
  initialState,
  reducers: {
    setWidthWindow(state, action: PayloadAction<number>) {
      state.width = action.payload
    },
  },
})
export const getWidth = (state: RootState) => state.width.width
export const { setWidthWindow } = WidthSlice.actions
export default WidthSlice.reducer
