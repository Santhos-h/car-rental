import React from 'react'
import '../styles/Register.css'

const Registration = () => {
  return (
    <div>
      <div class="reg">
        <div class="top">
          <h1>Registration</h1>
        </div>
        <div class="bottom">
          <form>
            <h3>User Info</h3>
            <div class="uname">
              <label for="uname">Username</label>
              <input type="text" name="uname" placeholder='Enter Your Name' />
            </div>
            <div class="email">
              <label for="email">Email Address</label>
              <input type="email" name="email" placeholder='Enter Email Address' />
            </div>
            <div class="pwd">
              <label for="pwd">Password</label>
              <input type="password" name="pws" placeholder='Enter Your Password' />
            </div>
            <h3>Payment Info</h3>
            <div class="pname">
              <label for="pname">Package Name</label>
              <input type="text" name="pname" placeholder='Silver I Free, Package Expire After, Free For All User' />
            </div>
            <div class="amount">
              <label for="amount">Amount</label>
              <span>USD 0</span>
            </div>
            <div class="cbox">
              <input type="checkbox" name="" id="" />
              <p>I have read & accept the Terms and Conditions</p>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
