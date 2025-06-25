import { Users } from 'lucide-react';
import { Eye } from 'lucide-react';
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup_page">
            <div className="signup_form">
                <div className="font">
                    <Users size={50} />
                </div>
                <div className="wrapper_header">
                    <h1 className="signup_header">Join Community Central</h1>
                </div>
                <div className="wrapper_sub_header">
                    <p className="signup_sub_header">Create your account to start connecting</p>
                </div>
                <div className="wrapper_form">

                    <h2>Full Name</h2>
                    <input type="text" placeholder="Enter your full name" className="form_input" />
                    <h2>Email</h2>
                    <input type="text" placeholder="Enter your email" className="form_input2" />
                    <h2>Password</h2>
                    <div className="wrapper_input_eye">
                        <input type="password" placeholder="Create a password" className="form_input3" />
                        <Eye size={20} className="eye_icon" />
                    </div>
                    <h2>Confirm Password</h2>
                    <div className="wrapper_input_eye2">
                        <input type="password" placeholder="Confirm your password" className="form_input4" />
                        <Eye size={20} className="eye_icon2" />
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