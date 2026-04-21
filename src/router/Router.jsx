import React from 'react'
import { Home } from '../pages/Home.jsx'
import { About } from '../pages/About.jsx'
import { Projects } from '../pages/Projects.jsx'
import { Profile } from '../pages/Profile.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Mainlayout } from '../layout/Mainlayout.jsx'

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [{
            index: true,
            element: <Home />
        }, {
            path: "about",
            element: <About />
        }, {
            path: "profile",
            element: <Profile />
        }, {
            path: "projects",
            element: <Projects />
        }
        ]
    },
])
