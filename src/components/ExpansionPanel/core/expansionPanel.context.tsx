import { createContext } from 'react'

import { IContext } from './expansionPanel.types'

export const Context = createContext<IContext | undefined>(undefined)
