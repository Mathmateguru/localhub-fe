import { Users } from 'lucide-react';
import "./Signup.css";
import { useState } from 'react';
import axios from 'axios';
  import { toast } from 'react-toastify';

const baseURL = import.meta.env.VITE_API_URL;


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, email, password }
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/signup`, data);
      setLoading(false);
      if (res.data.status === 'success') {
        toast(res.data.message, { type: 'success' });
      } 
    } catch (error: any) {
       setLoading(false);
      if(error?.response.data.status === 'error') {
       toast(error?.response.data.message, {type: 'error'});
       
      }
    }
  }

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
            <label htmlFor="name">Name</label>
            <input   onChange={(e) => setName(e.target.value)}
id="name" type="text" placeholder="Enter your full name" className="form_input" />
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setName(e.target.value)}
 id="email" type="text" placeholder="Enter your email" className="form_input" />
          </div>
            <div>
            <label htmlFor="password">Password</label>
            <input   onChange={(e) => setPassword(e.target.value)}
           id="password" type="password" className="form_input" />
            {/* <Eye size={20} className="eye_icon" /> */}
          </div>
          <div>
            <button 
            disabled={loading}
            onClick={handleSubmit} className="signup_button">
             {loading ? 'Loading...' : 'Sign Up'}
              </button>
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