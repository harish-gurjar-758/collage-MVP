import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Component/AdminLayout/AdminLayout";

// Dashboard Routes
import Dashboard from "./pages/Dashboard";

// Teacher Routes
import Teachers from "./pages/Teacher/Teachers";
import AddTeacher from "./pages/Teacher/AddTeacher";
import UpdateTeacher from "./pages/Teacher/UpdateTeacher";
import ViewTeacherDetails from "./pages/Teacher/ViewTeacherDetails";

// Students Routes
import Students from "./pages/Students";

// Departments Routes
import Departments from "./pages/Departments/Departments";
import AddDepartment from "./pages/Departments/AddDepartment";
import UpdateDepartmentDetails from "./pages/Departments/UpdateDepartmentDetails";
import ViewDepartmentDetails from "./pages/Departments/ViewDepartmentDetails";

// Notices Routes
import Notices from "./pages/Notices";

// News Routes
import News from "./pages/News";
import Users from "./pages/Users";
import AddNoticeCategory from "./pages/Notices/NoticeCategory/AddNoticeCategory";

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
          <Route path="view-teacher-details" element={<ViewTeacherDetails />} />

          {/* Students Routes */}
          <Route path="students" element={<Students />} />

          {/* Departments Routes */}
          <Route path="departments" element={<Departments />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="update-department-details/:id" element={<UpdateDepartmentDetails />} />
          <Route path="view-department-details/:id" element={<ViewDepartmentDetails />} />

          {/* Notice Routes */}
          <Route path="notices" element={<Notices />} />
          <Route path="add-notice-category" element={<AddNoticeCategory />} />

          <Route path="news" element={<News />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;