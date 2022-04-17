import { Link } from 'react-router-dom';

const SignUp = () => {
  
  const ma = document.querySelector('.content');

  const red = () =>{
      ma.style.color = "blue";
  }


    return (
        <div className="SignUp">

            <div className="wrapper">
                <div className="main">
                    <div className="content">
                        <div className='d1'>
                            <p>Don't Have an Account? <a href="#">Sing Up</a></p>
                        </div>
                        <div className='title'>
                            <h2>Student Log In</h2>
                            <p>Lorem  elit. Dolor aspernatur ad animi culpa fugit! Esse!</p>
                        </div>
                        <form className='form' action="">

                            <div className='d2'>
                                <div >
                                    <p onClick={()=>{red()}}>E-mail</p>
                                    </div>    
                                    <input type="text" placeholder="example@gmail.com" />
                                    <img src="./media/logo/user.png" alt="" />
                                
                            </div>

                            <div className='d2'>
                                <div>
                                    <p>Password</p>
                                    
                                </div>
                                <input type="passsword" placeholder="**********" />
                                <img src="./media/logo/password.png" alt="" />
                            </div>

                            <Link to="/student"> <button >Login </button></Link>
                               
                           

                            <div className="devi">
                                <p>Or Sign In With</p>
                            </div>

                            <div className="socials">
                                <div><img src="./media/logo/google.png" /></div>
                                <div><img src="./media/logo/github.png" /></div>
                                {/* <div>Git Hub</div> */}
                            </div>

                        </form>
                </div>


                    <div className="sideshow"><h1>side</h1></div>
                </div>
            </div>



        </div>
    );
}

export default SignUp;