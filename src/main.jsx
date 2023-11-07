import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Users from './components/Users/Users'
import UserDetails from './components/UserDetails/UserDetails'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/users',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <Users></Users>
            },
            {
                path: '/user/:userId',
                loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails></UserDetails>
                //
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)
