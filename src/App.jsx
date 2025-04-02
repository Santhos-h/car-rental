import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import Listing from './pages/Listing'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Buynow from './pages/Buynow'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Page6 from './Components/Page6'
import Page7 from './Components/Page7'
import Page8 from './Components/Page8'
import Page9 from './Components/Page9'

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route index path="/car-rental" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/detail1" element={ <Page1 />} />
        <Route path="/detail2" element={ <Page2 />} />
        <Route path="/detail3" element={ <Page3 />} />
        <Route path="/detail4" element={ <Page4 />} />
        <Route path="/detail5" element={ <Page5 />} />
        <Route path="/detail6" element={ <Page6 />} />
        <Route path="/detail7" element={ <Page7 />} />
        <Route path="/detail8" element={ <Page8 />} />
        <Route path="/detail9" element={ <Page9 />} />
        <Route path="/account" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
