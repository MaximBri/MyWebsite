import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: {burger: boolean} = {
  burger: false,
}

const WindowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    setBurgerWindow(state, action: PayloadAction<boolean>) {
      state.burger = action.payload
    },
  },
})
export const getBurger = (state: RootState) => state.windows.burger
export const { setBurgerWindow } = WindowsSlice.actions
export default WindowsSlice.reducer
