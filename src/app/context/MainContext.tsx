import { createContext, useContext, useState, ReactNode, FC } from 'react'

interface MainContextValue {
  token: string | null
  setToken: (newValue: string | null) => void
  chatId: string | null
  setChatId: (newValue: string | null) => void
}

const MainContext = createContext<MainContextValue | undefined>(undefined)

interface ExampleProviderProps {
  children: ReactNode
}

export const MainProvider: FC<ExampleProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const [chatId, setChatId] = useState<string | null>(null)

  return (
    <MainContext.Provider value={{ token, setToken, chatId, setChatId }}>
      {children}
    </MainContext.Provider>
  )
}

export const useMainContext = (): MainContextValue => {
  const context = useContext(MainContext)
  if (!context) {
    throw new Error('useExample must be used within an ExampleProvider')
  }
  return context
}
