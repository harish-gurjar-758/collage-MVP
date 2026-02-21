import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Component/AdminLayout/AdminLayout";

// Dashboard Routes
import Dashboard from "./pages/Dashboard";

// Teacher Routes
import Teachers from "./pages/Teacher/Teachers";
import AddTeacher from "./pages/Teacher/AddTeacher";
import UpdateTeacher from "./pages/Teacher/UpdateTeacher";

// Students Routes
import Students from "./pages/Students";

// Departments Routes
import Departments from "./pages/Departments";

// News Routes
import News from "./pages/News";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* Teacher Routes */}
          <Route path="teachers" element={<Teachers />} />
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="update-teacher-details" element={<UpdateTeacher />} />

          {/* Students Routes */}
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