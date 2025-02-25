import { Route, Routes } from "react-router";
import NavBar from "../Components/NavBar";
import HomePage from "../Pages/HomePage";
import About from "../Pages/About";
import Login from "../Pages/Login";
import HTMLCompiler from "../Pages/HTMLCompiler";
import Judger from "../Pages/Judger";
import SignUP from "../Pages/SignUp";
import Contest from "../Pages/Contest";
import Solve from "../Pages/solve";
import Dashboard from "../Pages/Dashboard";
import Submissions from "../Pages/Submissions";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/about" element={<About />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path="/html" element={<HTMLCompiler />} />
      <Route path="/judger" element={<Judger />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="contest/solve/:questionId" element={<Solve />} />
      {/* <Route to="/" element={<Home />} />
        <Route to="/" element={<Home />} /> */}
    </Routes>
  );
}

export default AllRoutes;
