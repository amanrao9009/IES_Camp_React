import { useState } from "react";


const Sidebar = () => {
    const [inactive, setInactive] = useState(false);

    return (

        <>
         <section className="hamburger" onClick={() => setInactive(!inactive)}>
                <img src="./media/logo/menu.png" alt="" />
            </section>
        <div className={`sidebar ${inactive ? "inactive":""}`}>
           
            <div>
                <a href="">Home</a>
            </div>
            <div>
                <a href="">Mentor</a>
            </div>
            <div>
                <a href="">Attendence</a>
            </div>
            <div>
                <a href="">Fill Data</a>
            </div>
            <div>
                <a href="">Assignment</a>
            </div>
            <div>
                <a href="">Projects</a>
            </div>
            <div>
                <a href="">Notes</a>
            </div>
            <div>
                <a href="">Pre Exams</a>
            </div>
            <div>
                <a href="">Correction</a>
            </div>
            <div>
                <a href="">Suggestion</a>
            </div>
        </div></>

        
    );
}

export default Sidebar;
