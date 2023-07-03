import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Nomatch from "./components/Nomatch";
import Student from "./pages/Student";
import Signup from "./pages/Signup";
import Stuff from "./pages/Stuff";
import StudentList from "./components/StudentList";
import Admin from "./pages/Admin";
import AddStudent from "./components/AddStudent";
import AdminStudentList from "./components/AdminStudentList";
import AdminStuffList from "./components/AdminStuffList";
import AddStuff from "./components/AddStuff";
import AllStudents from "./components/AllStudents";
import { ToastContainer } from "react-toastify";
import Advisor from "./pages/Advisor";
import Registrar from "./pages/Registrat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/advisor" element={<Advisor />}></Route>
        <Route path="/registrar" element={<Registrar />}></Route>
        <Route path="/Stuff" element={<Stuff />}>
          <Route index element={<StudentList />}></Route>
          <Route path="Studentlist" element={<StudentList />}></Route>
          <Route path="allstudents" element={<AllStudents />}></Route>
          <Route path="addstudent" element={<AddStudent />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<StudentList />}></Route>
          <Route path="Studentlist" element={<AdminStudentList />}></Route>
          <Route path="stufflist" element={<AdminStuffList />}></Route>
          <Route path="addstuff" element={<AddStuff />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      {/* <Student /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
