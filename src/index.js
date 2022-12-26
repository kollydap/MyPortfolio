import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Blogs from "./components/Blogs";
// import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";
import BlogList from "./components/BlogList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<App />}>
          {" "}
        </Route>
        <Route path="blogs" element={<BlogList />}></Route>
        <Route path="blogs/:id/" element={<Blogs />}>
          {" "}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
