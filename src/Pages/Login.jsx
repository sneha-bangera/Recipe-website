import './Login.css'
function Login(){
    
    return(
    <div className="login">
        <div className="login-container">
          <h2>Login</h2>
          <div className="login-fields">
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
          </div>
          <div className="login-agree">
            <input type="checkbox"/>
            <p>I agree to the terms of use & privacy policy.</p>
          </div>
          <button>Continue</button>      
        </div>
    </div>
    )
}
export default Login;