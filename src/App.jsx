import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home'
import Courses from './course/Courses';
import Signup from './components/Signup';



function App() {
  return (
   <>
  <div className=' dark:bg-slate-900 dark:text'>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Courses/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
   </Routes>
   </div>
   </>
  )
}

export default App
