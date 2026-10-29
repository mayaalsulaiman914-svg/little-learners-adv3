import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admission from './pages/Admission'
import StudentLife from './pages/StudentLife'
import Contact from './pages/Contact'
 
function App() {
 
 
  return (
    <>
     <Navbar />
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/academics' element={<Academics />} />
      <Route path='/admissions' element={<Admission />} />
      <Route path='/StudentLife' element={<StudentLife />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
