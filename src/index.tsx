import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from 'app/router/index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { Provider } from 'react-redux'
import { store } from 'app/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={ store }>
            <RouterProvider router={ router } />
        </Provider>
    </React.StrictMode>,
)
