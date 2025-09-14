'use client'

import { createContext, useContext, useState, ReactNode, FC } from 'react'

interface MainContextValue {
  works: worksBoxInterface[] | null
  setWorks: (arg: worksBoxInterface[] | null) => void
}

const MainContext = createContext<MainContextValue | undefined>(undefined)

interface ExampleProviderProps {
  children: ReactNode
}

export const MainProvider: FC<ExampleProviderProps> = ({ children }) => {
  const [works, setWorks] = useState<worksBoxInterface[] | null>(null)

  return (
    <MainContext.Provider
      value={{ works, setWorks }}
    >
      {children}
    </MainContext.Provider>
  )
}

export const useMainContext = (): MainContextValue => {
  const context = useContext(MainContext)
  if (!context) {
    throw new Error('Context Error')
  }
  return context
}
