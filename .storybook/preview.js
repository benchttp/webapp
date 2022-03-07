import { addDecorator } from '@storybook/react'
import React from 'react'

import { GlobalStyle } from '../src/shared/style'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#26282E',
      },
    ],
  },
}

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  )
}

addDecorator(withGlobalStyles)
