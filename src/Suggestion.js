import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const Suggestion = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pagecontent">
        <Sidebar></Sidebar>
        
          <section className="sg_box">
            <div className="upper">
              <div className="form_wrp">
                <div className="info_right">
                  <p>
                    Let us know your questions, suggestions and concerns by
                    filling out the contact form below.
                  </p>
                  <div className="socials"></div>
                </div>
                <div className="allinputes">
                  <form action="">
                    <div>
                      <p>Name</p>
                      <input type="text" />
                    </div>
                    <div>
                      <p>Phone</p>
                      <input type="text" />
                    </div>
                    <div>
                      <p>Email</p>
                      <input type="text" />
                    </div>
                    <div>
                      <p>Suggestions or Queries</p>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        
      </div>
    </div>
  );
};

export default Suggestion;
