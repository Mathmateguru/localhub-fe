import './signin.css'
import { Users } from 'lucide-react'
 



const Signin = ()=>{

    return(
        <div className='main-wrapper'>
             <div className='users-icon'>
                 <Users size={40} />
                 </div>
                 <div className='Welcome'>
                    <h1>Welcome Back</h1>
                    </div>
                   <span  className='signin-text'>
                    <h6>Sign in to your Localhub account</h6>
                    </span>
                    

                    <div className='user-detail'>
                        <h3>Email</h3>
                         <input type="Email" placeholder='Enter your email' className='signin-email'/>
            
                         
                            <h3 className='password-header'>Password</h3>
                            <input type="password" placeholder=' Enter your password' className='signin-password'/>
                            
            
                          <button className='signin-btn'>Sign In</button>
                            
                            <div className='footer'>
                            <p className='footer-txt1'>Don't have an account?</p>
                            <p>Sign-In</p>
                            </div>


                         </div>

                    </div>



        
    )


}


export default Signin;