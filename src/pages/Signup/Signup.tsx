import { Users, Eye } from 'lucide-react';
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup_page">
      <div className="signup_form">
        <div className="font">
          <Users size={50} />
        </div>
        <h2 className="signup_header">Join Community Central</h2>
        <p className="signup_sub_header">Create your account to start connecting</p>
        <div >
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" placeholder="Enter your full name" className="form_input" />
          </div>

          <div>
          <label htmlFor="name">Email</label>
          <input id="name" type="text" placeholder="Enter your email" className="form_input" />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" className="form_input" />
            {/* <Eye size={20} className="eye_icon" /> */}
          </div>
          <div>
            <button className="signup_button">Create Account</button>
          </div>
          <div className="wrapper_bottom_text">
            <p className="bottom_text_0ne">Already have an account?</p>
            <p className="bottom_text_two">Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;