import React, { createContext } from 'react'

type ContextProps = {
    theme: string,
    toggleTheme: React.Dispatch<React.SetStateAction<string>>
  };

export const Context = createContext<Partial<ContextProps>>({})