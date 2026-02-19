import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/MainSite/Home"
import Registration from "./pages/Registration"
import NavHeader from './components/NavHeader';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
