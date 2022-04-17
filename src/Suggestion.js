import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai"

const Suggestion = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pagecontent">
        <Sidebar></Sidebar>

        <section className="sg_box">
          

            <form action="">

              <h2>Contact Us</h2>
            <p>
              Let us know your questions, suggestions and concerns by filling
              out the contact form below.
            </p>
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text"  placeholder="Your Mail"/>
              </div>
              <div>
                <input type="text" placeholder="Phone No."/>
              </div>
              <div>
                <input type="text" name="" id="" placeholder="Your Message" />
              </div>

              <Link to="#"><button>Submit <p><AiOutlineArrowRight/></p></button></Link>
            </form>
          
        </section>
      </div>
    </div>
  );
};

export default Suggestion;
