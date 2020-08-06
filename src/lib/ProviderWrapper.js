import { Provider } from 'react-redux'
import store from './redux'

import React from 'react'

export const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
