import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import About from "./pages/about";
import Profile from "./pages/Profile";
import Header from "./component/Header";
import PriavateRoute from "./component/PriavateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/listing/:listingId" element={<Listing/>}/>
          <Route element = {<PriavateRoute></PriavateRoute>}>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/create-listing" element={<CreateListing/>}/>
          <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}