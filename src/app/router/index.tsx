import { createHashRouter } from 'react-router-dom'
import { ErrorBoundary } from 'pages/ErrorBoundary'
import App from 'app/App'
import { AboutMe } from 'pages/AboutMe'
import { UserInfo } from 'pages/UserInfo'
import { Main } from 'pages/Main'

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'AboutMe',
                element: <AboutMe />
            },
            {
                path: 'UserInfo/:userId',
                element: <UserInfo />
            },
            {
                path: '',
                element: <Main />
            }
        ],
        errorElement: <ErrorBoundary />
    }
])

export default router
