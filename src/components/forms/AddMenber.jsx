
const AddStudent = () => {
  return (
    <>
      <div className="annouce">
        <div className="heading">
          <h3>Add Member</h3>
        </div>
        <div>
            <form id="first" action="">
          <section className="MemberForm" action="">
            <section className="formsection">
              <div>
                <p>Select Roll :</p>
                <select required >
                  <option defaultChecked value="Student">
                    Student
                  </option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
              <div>
                <p>Name of Student :</p>
                <input type="text" name="" id="" />
              </div>
              <div>
                <p>Branch :</p>
                <input type="text" name="" id="" />
              </div>
             
            </section>
            <section className="formsection">
            <div>
                <p>Enrollment No :</p>
                <input type="text" name="" id="" />
              </div>
              <div>
                <p>Course :</p>
                <input type="text" name="" id="" />
              </div>
              <div>
                <p>Current Semester :</p>
                <input type="text" name="" id="" />
              </div>
            </section>
            <section className="formsection">
              <div>
                <p>Date of Birth :</p>
                <input type="text" name="" id="" />
              </div>
              <div>
                <p>Email Address :</p>
                <input type="text" name="" id="" />
              </div>
              <div>
                <p>Mobile No. :</p>
                <input type="text" name="" id="" />
              </div>
             
            </section>
            
          </section>
          <div className="sub_btn">
                <button>Add Student</button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
