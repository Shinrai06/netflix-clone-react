import "./login.css"

function Login() {
  return (
    <div className="Login">
      <div className="top">
        <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="" 
          className="logo"/>
        </div>
      </div>
      <div className="container">
        <form action="">
            <h1>Sign In</h1> 
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password" />
            <button className="loginBtn">Start</button>
            <span>
                New to Netflix? <b>Sign up now.</b>
            </span>
            <small>
                This page is not protected by Google reCAPTCHA to ensure you're 
                not a bot.
                <b>Learn More.</b>
            </small>
        </form>
      </div>
    </div>
  )
}

export default Login
