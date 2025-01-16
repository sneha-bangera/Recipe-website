import './Login.css'
import { useState } from 'react';
function Login(){
    
  const [state,setState] = useState("Login");

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h2>{state}</h2>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Your Name"/>:<></>}
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
        </div>
        {state=="Sign Up"?
        <div className="loginsignup-agree">
          <input type="checkbox" defaultChecked/>
          <p>I agree to the terms & privcy policy</p>
        </div>: <></>}
        
        <button>Continue</button>
        {state==="Sign Up"
        ?<p className="loginsignup-login">Already have an account? <span onClick={() => {setState("Login")}} style={{cursor:"pointer", color:"red"}}> Login here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={() => {setState("Sign Up")}} style={{cursor:"pointer", color:"red"}}> Click here</span></p>}
                 
      </div>
    </div>
  )
}
export default Login;