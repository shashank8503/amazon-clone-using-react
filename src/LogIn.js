import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./LogIn.css";
import {auth} from "./firebase";

function LogIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn= e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            
            .catch(error => alert(error.message))

    }
    const register= e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth); 
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }



    return (
        <div className='login'>
            
                <img
                     className="header__logo"
                    src="data:image/jpeg;base64,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"
                />

            
            <div className="login__container">
                <form>
                    <h1>Sign In</h1>
                    <h5>Email </h5>
                    <input className='shan1'type='text' value={email} onChange={
                        e => setEmail(e.target.value) 
                    }/>
                    <h5>Password</h5>
                    <input  className='shan1' type="password" value={password} onChange={
                    e=> setPassword(e.target.value)
                    }/>
                    <p></p>
                    
                    <button  onClick={signIn} type="submit" className='shan2'> Sign-In</button>
                    <p></p>
                    <input  type='checkbox'  />
                    <label>  Keep me signed in. </label>
                    <p></p>
                    <label>By signing-in, you agree to V-care's Conditions of Use and Privacy Notice.</label>

                    <p>
                        
                    </p>
                    

            

             </form>

            </div>
            <button onClick={register} className='shan'>Create your V-CARE Account  </button>
            
            
             

        </div>
    )
}

export default LogIn
