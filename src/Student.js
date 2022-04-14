import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";


const Student = () => {


  
  return (
    <div>
      <Navbar></Navbar>
      <div className="pagecontent">
        <Sidebar></Sidebar>
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

export default Student;
