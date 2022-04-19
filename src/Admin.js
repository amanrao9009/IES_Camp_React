import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminBar from "./components/adminbar";

import Announce from "./components/forms/Announce";

import AddMamber from "./components/forms/AddMenber";
import Navbar from "./components/navbar";
import "./components/forms/form.css";

const Admin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pagecontent">
        <AdminBar />
        <div className="panel">
          

          
            <Routes>
              <Route path="add"  element={<AddMamber />} />
              <Route path="" element={<Announce />} />
            </Routes>
          

          <div className="mails">
            <div className="heading">
              <h3>Recent Mails</h3>
            </div>
            <div>{/* content */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
