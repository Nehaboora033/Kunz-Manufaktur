import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Startseite from '../pages/Startseite'
import Unsere from '../pages/Unsere'
import Workshops from '../pages/Workshops'
import Uber from '../pages/Uber'
import Kontakt from '../pages/Kontakt'

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Startseite />,
      },
      {
        path: 'unsere',
        children: [
          {
            index: true,
            element: <Unsere />, // for /unsere
          },
          {
            path: ':id', // 👈 for /unsere/:id
            element: <Unsere />, // same component, just dynamic
          },
        ],
      },
      {
        path: 'workshops',
        element: <Workshops />
      },
      {
        path: 'uber',
        element: <Uber />
      },
      {
        path: 'kontakt',
        element: <Kontakt />
      },

    ]

  }
])

export default AppRoutes