import { useState } from "react";
import { IconContext } from "react-icons";
import { FaChalkboardTeacher} from 'react-icons/fa';
import {  MdOutlineDashboard,MdOutlineStickyNote2,MdSchool } from 'react-icons/md';
import {  GoChecklist } from 'react-icons/go';
import {  AiOutlineForm ,AiOutlineProject} from 'react-icons/ai';
import {  CgNotes } from 'react-icons/cg';
import {  BsCalendarDate } from 'react-icons/bs';
import {  BiMessageSquareError,BiCommentDetail } from 'react-icons/bi';
import { Squash as Hamburger } from 'hamburger-react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './admin.css';








const AdminBar = () => {
    const [inactive, setInactive] = useState(false);
    const [isOpen, setOpen] = useState(true)
    const [form, formOn] = useState(true);
    const [Mform, MformOn] = useState(true);



    return (

        <>
            <section className="hamburger"  onClick={() => setInactive(!inactive)}>
            <Hamburger rounded size={25} toggled={isOpen} toggle={setOpen} />
            </section>
            <div className={`sidebar ${inactive ? "inactive" : ""}`}>
            <IconContext.Provider
                        value={{className: "leftnav_icons" }}
                        
                        
                    > 
                <div >
                    <p><MdOutlineDashboard /></p> <a href="">Dashbord</a> 
                </div>
                <div onClick={()=>MformOn(!Mform)}>
                <p><FaChalkboardTeacher /></p><a href="#">Add Mentor +</a>
                </div>
                <div onClick={()=>formOn(!form)}>
                <p><MdSchool /></p><a href="#">Add Student +</a>
                </div>
                <div>
                  <p><GoChecklist/></p>  <a href="">Attendence</a>
                </div>
                <div>
                   <p><AiOutlineForm/></p> <a href="">Fill Data</a>
                </div>
                <div>
                   <p><CgNotes/></p> <a href="">Assignment</a>
                </div>
                <div>
                  <p><AiOutlineProject/></p>  <a href="">Projects</a>
                </div>
                <div>
                   <p><MdOutlineStickyNote2 /></p> <a href="">Notes</a>
                </div>
                <div>
                  <p><BsCalendarDate/></p>  <a href="">Pre Exams</a>
                </div>
                <div>
                   <p><BiMessageSquareError/></p> <a href="">Correction</a>
                </div>
                <div>
                  <p><BiCommentDetail/></p>  <a href="./queries">Suggestion</a>
                </div>
                </IconContext.Provider>
            </div>
            

            {/* Student form */}

            <div className={`Student_form_wrap  ${form ? "form_off" : ""}`}>
             
              <form className="formAdmin" action="">
                <section><AiOutlineCloseCircle onClick={()=>formOn(!form)}  style={{fontSize:"30px"}}/></section>
                <h2>Fill Student Information</h2>
                <div><p>Name of Student :</p><input type="text" name="" id="" /></div>
                <div><p>Enrollment No :</p><input type="text" name="" id="" /></div>
                <div><p>Branch :</p><input type="text" name="" id="" /></div>
                <div><p>Course :</p><input type="text" name="" id="" /></div>
                <div><p>Current Semester :</p><input type="text" name="" id="" /></div>
                <button><p>Add Student</p></button>

              </form>
            </div>

            {/* Mentor Form */}
            <div className={`Student_form_wrap  ${Mform ? "form_off_Mentor" : ""} `}>
             
             <form className="formAdmin" action="">
               <section><AiOutlineCloseCircle onClick={()=>MformOn(!Mform)}  style={{fontSize:"30px"}}/></section>
               <h2>Fill Mentor Information</h2>
               <div><p>Name of Student :</p><input type="text" name="" id="" /></div>
               <div><p>Create User Id :</p><input type="text" name="" id="" /></div>
               <div><p>Branchs :</p><input type="text" name="" id="" /></div>
               <div><p>Current Post :</p><input type="text" name="" id="" /></div>
               <div><p>Current Semesters :</p><input type="text" name="" id="" /></div>
               <button><p>Add Mentor</p></button>

             </form>
           </div>
            </>


    );
}

export default AdminBar;
