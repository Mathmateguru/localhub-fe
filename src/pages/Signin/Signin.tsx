import './signin.css'
import { Users } from 'lucide-react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useUserContext } from '../../contexts/userContext';


const baseURL = import.meta.env.VITE_API_URL;


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const { updateAuthentication } = useUserContext();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email, password }
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/login`, data);
      setLoading(false);
      if (res.data.status === 'success') { 
       const token = res.data.accessToken;
        updateAuthentication(true, token);        navigate('/feeds');
      }
    } catch (error: any) {
      setLoading(false);
      if (error?.response.data.status === 'error') {
        toast(error?.response.data.message, { type: 'error' });

      }
    }
  }

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
            <input onChange={(e) => setEmail(e.target.value)} id='email' type="text" placeholder="abcd@gmail.com" className="form_input" />
          </div>


          <h3 className='password-header'>Password</h3>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder=' Enter your password' className='form_input' />


          <button disabled={loading}
              onClick={handleSubmit} className='signin-btn'>{loading ? 'Loading...' : 'Sign In'}</button>

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