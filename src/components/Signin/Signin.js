import React, { useState } from 'react';
import axios from 'axios';

const Signin = ({ onRouteChange }) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const onSubmitSignIn = () => {
    axios.post('http://localhost:3000/signin', {
      email: signInEmail,
      password: signInPassword
    })
    .then(response => {
      if (response.data === 'success') {
        onRouteChange('home');
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 white-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={e => setSignInEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                type="password"
                name="password"
                id="password"
                onChange={e => setSignInPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitSignIn}
              className="b ph3 pv3 input-reset ba b--white-smoke bg-transparent grow pointer f6 dib white"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p  onClick={() => onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Signin;
