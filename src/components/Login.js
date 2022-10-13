import React, {useState} from 'react'
import "./Login.css"
import { NavLink , useNavigate} from "react-router-dom";
import img from '../img/amazon-logo.png'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email,password)
        .then(auth => {
            history('/')
        } )
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {

            console.log(auth);
            if (auth){
                history('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <NavLink to="/">
        <img src={img} alt="" className='login-logo' />
        </NavLink>

        <div className="login_container">
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login_signinButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon fake clone Conditions of Use and Privacy Notice.</p>

            <button type='submit' onClick={register} className='login_registerButton'>Create Your Amazon Account</button>

        </div>
    </div>
  )
}

export default Login
