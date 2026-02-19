import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/MainSite/Home"
import Registration from "./pages/Registration"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
