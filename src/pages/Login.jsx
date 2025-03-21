import React from 'react'
import '../styles/login.css'

const Login = () => {
    return (
        <form>
            <div class="box">
                <h1>Sign In</h1>
                <label for="uname">
                    Username
                </label>
                <input type="text" name="uname" placeholder="Enter Your Username" />
                <label for="pwd">
                    Password
                </label>
                <input type="pwd" name="pwd" placeholder='Enter Your Password' />
                <div className="bottom">
                    <button>Login</button>
                    <a href="#">Forget Password?</a>
                </div>
                <a href="#">CREATE AN ACCOUNT</a>
            </div>
        </form>
    )
}

export default Login