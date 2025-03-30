// import { createBrowserRouter, Route, createRoutesFromElements,
//   RouterProvider } from 'react-router-dom'


// // layout
// import RootLayout from './layout/RootLayout'

// //pages
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Work from './pages/Work'
// import Project from './pages/Project'


// let router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path='/' element = {<RootLayout />} >

//       <Route index element = {<Home />}/>
      
//       <Route path='about' element = {<About/>} />
//       <Route path='contact' element = {<Contact />} />
//       <Route path='work' element = {<Work/>} />

//       <Route path='work/:slug' element ={<Project />} />
    
//     </Route>
//   ),
// )


// export default function App(){
//   return (
//     <>
//     <RouterProvider router={router} />
//     </>
//   )
// }






























import {  createBrowserRouter , Route, createRoutesFromElements,
  RouterProvider } from 'react-router-dom'


// layout
import RootLayout from './layout/RootLayout'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Project from './pages/Project'


let router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element = {<RootLayout />} >

      <Route index element = {<Home />}/>
      
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contact />} />
      <Route path='work' element = {<Work/>} />

      <Route path='work/:slug' element ={<Project />} />
    
    </Route>
  ),
  {
    basename : "/AmineMani/" ,
  }
)


export default function App(){
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
