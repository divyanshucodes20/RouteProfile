import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/home'
import About from './components/About/About'
import Contact from './components/Contact/contactus'
import User from './components/user/User'
import Github, { githubInfoLoader } from './components/github/Github'
/*const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:"<Contact/>"
      }
    ]
  }
])*/
/* <Route path="about" element={<About />}>
      <Route path="divyanshu" element={}/>
      </Route> this is the syntax agar kisi route ke andar nested loop banana hai matlab about/divyanshu*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />} />
      <Route path="" element={<Home />} />
      <Route path="user/:userId" element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubInfoLoader}/>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
