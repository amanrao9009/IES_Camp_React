import AdminBar from "./components/adminbar";
import Navbar from "./components/navbar";


const Admin = () => {


  
  return (
    <div>
      <Navbar></Navbar>
      <div className="pagecontent">
        <AdminBar/>
        <div className="panel">
          <div className="annouce">
            <div className="heading">
              <h3>Announcements</h3>
            </div>
            <div>{/* content */}</div>
          </div>
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
