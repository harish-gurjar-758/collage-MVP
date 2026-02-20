import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/MainSite/Home"
import Registration from "./pages/Registration"
import NavHeader from './components/NavHeader';
import AboutCollege from './pages/MainSite/AboutCollege/AboutCollege';
import ExplorePrograms from './pages/MainSite/ExplorePrograms';
import CampusTour from './pages/MainSite/CampusTour';
import Footer from './components/Footer';
import Admission from './pages/MainSite/Admission/Admission';
import StudentCorner from './pages/MainSite/StudentCorner';
import DepartmentsPage from './pages/MainSite/Departments';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/about-college' element={<AboutCollege />} />
          <Route path="/programs" element={<ExplorePrograms />} />
          <Route path="/campus-tour" element={<CampusTour />} />

          <Route path="/admission" element={<Admission />} />
          <Route path="/student" element={<StudentCorner />} />
          <Route path="/departments" element={<DepartmentsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
