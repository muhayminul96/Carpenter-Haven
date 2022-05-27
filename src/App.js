import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Header from "./Pages/Shared/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Signup from "./Pages/Authentication/Signup";
import Login from "./Pages/Authentication/Login";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blog/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/AddReview";

function App() {
  return (
    <div className="App mx-8">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<AddReview></AddReview>}> </Route>
          <Route path="addreview" element={<AddReview></AddReview>}> </Route>

        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
