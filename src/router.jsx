import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Projects from './pages/Projects'
import Career from './pages/Career'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'projects', element: <Projects /> },
      { path: 'career', element: <Career /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
