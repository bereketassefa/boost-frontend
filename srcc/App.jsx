import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Nomatch from "./components/Nomatch";
import Student from "./pages/Student";
import Signup from "./pages/Signup";
import Stuff from "./pages/Stuff";
import StudentList from "./components/StudentList";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Stuff" element={<Stuff />}>
          <Route index element={<StudentList />}></Route>
          <Route path="Studentlist" element={<StudentList />}></Route>
          <Route path="addstudent" element={<StudentList />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<StudentList />}></Route>
          <Route path="Studentlist" element={<StudentList />}></Route>
          <Route path="stufflist" element={<StudentList />}></Route>
          <Route path="addstuff" element={<StudentList />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>

      {/* <Student /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
