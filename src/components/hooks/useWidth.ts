import React from 'react'
import { setWidthWindow } from '../../rtk/slices/WidthSlice'
import { useDispatch } from 'react-redux'

export const useWidth = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const f = () => {
      dispatch(setWidthWindow(window.innerWidth))
    }
    window.addEventListener('resize', f)
    return () => {
      window.removeEventListener('resize', f)
    }
  }, [])
}
