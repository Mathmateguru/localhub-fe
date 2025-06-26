import './signin.css'
import { Users } from 'lucide-react'




const Signin = () => {

  return (
    <div className='main-wrapper'>
      <form className='signin_form'>
        <div className="font">
          <Users size={50} />
        </div>
        <h2 className="signup_header">Welcome Back</h2>
        <p className="signup_sub_header">Sign in to your Localhub account</p>
        <div>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' type="text" placeholder="abcd@gmail.com" className="form_input" />
          </div>


          <h3 className='password-header'>Password</h3>
          <input type="password" placeholder=' Enter your password' className='form_input' />


          <button className='signin-btn'>Sign In</button>

          <div className='footer'>
            <p className='footer-txt1'>Don't have an account?</p>
            <p>Sign-In</p>
          </div>


        </div>
      </form>
    </div>




  )


}


export default Signin;