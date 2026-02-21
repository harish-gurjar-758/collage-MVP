import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Component/AdminLayout/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Departments from "./pages/Departments";
import News from "./pages/News";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="departments" element={<Departments />} />
          <Route path="news" element={<News />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;