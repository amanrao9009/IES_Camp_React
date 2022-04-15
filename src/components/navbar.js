import { useState } from "react";

const Navbar = () => {

  const [nocontent, SetContetn] = useState(true);
  const [noMessage, SetMessage] = useState(true);

  return (
    <nav>
      <div className="leftnav">
        <h3>IES Collage</h3>

        {/* <img src="./media/logo/search.png" alt="" />

          <input type="text" /> */}
      </div>

      <div className="rightnav">
        <img onClick={() => { SetMessage(!noMessage) }} src="./media/logo/email.png" alt="" />
        <img src="./media/logo/notification.png" alt="" />
        <img onClick={() => { SetContetn(!nocontent) }} src="./media/logo/user1.png" alt="" />
      </div>


      {/* POP UPs */}

      <div className={`profile_popup ${nocontent ? "profille_off" : ""} `}>
        <h1 onClick={() => { SetContetn(!nocontent) }} className="cut">x</h1>
        <div className="photo">
          <img src="./media/logo/profile.png" alt="" />
        </div>
        <div className="info">
          <h1>Aman Rao</h1>
          <p>Student</p>
          <p>0177CS191026</p>
          <p>Computer Science</p>
          <p>6th Semester</p>

        </div>
        <button>Log Out</button>
      </div>

      <div className={`message ${noMessage ? "profille_off" : ""} `}>
        <h1 onClick={() => { SetMessage(!noMessage) }} className="cut">x</h1>
        <div >

        <h3>No message yet</h3>

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
