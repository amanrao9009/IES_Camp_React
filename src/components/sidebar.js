import { useState } from "react";
import { IconContext } from "react-icons";
import { FaChalkboardTeacher} from 'react-icons/fa';
import {  MdOutlineDashboard,MdOutlineStickyNote2 } from 'react-icons/md';
import {  GoChecklist } from 'react-icons/go';
import {  AiOutlineForm ,AiOutlineProject} from 'react-icons/ai';
import {  CgNotes } from 'react-icons/cg';
import {  BsCalendarDate } from 'react-icons/bs';
import {  BiMessageSquareError,BiCommentDetail } from 'react-icons/bi';
import { Squash as Hamburger } from 'hamburger-react'








const Sidebar = () => {
    const [inactive, setInactive] = useState(false);
    const [isOpen, setOpen] = useState(true)

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
                    <p><MdOutlineDashboard /></p> <a href="">Home</a> 
                </div>
                <div>
                <p><FaChalkboardTeacher /></p><a href="">Mentor</a>
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
            </div></>


    );
}

export default Sidebar;
