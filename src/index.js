import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import App from './App'
import { UserProvider } from './contexts/user.context'
import { CategoriesProvide } from './contexts/categories.context'
import { CartProvider } from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvide>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvide>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
