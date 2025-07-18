import { createContext, useContext, useState, ReactNode, FC } from 'react'

interface MainContextValue {
  token: string | null
  setToken: (newValue: string | null) => void
  chatId: string | null
  setChatId: (newValue: string | null) => void
  works: worksBoxInterface[] | null
  setWorks: (arg: worksBoxInterface[] | null) => void
}

const MainContext = createContext<MainContextValue | undefined>(undefined)

interface ExampleProviderProps {
  children: ReactNode
}

export const MainProvider: FC<ExampleProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const [chatId, setChatId] = useState<string | null>(null)
  const [works, setWorks] = useState<worksBoxInterface[] | null>(null)

  return (
    <MainContext.Provider
      value={{ token, setToken, chatId, setChatId, works, setWorks }}
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
