import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';


export function SignIn({signInWithFacebook}) {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Sign in</h1>
        <button className="btn sign-in__button" onClick={signInWithFacebook} type="button">Facebook</button>
        {/* <button className="btn sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
        <button className="btn sign-in__button" onClick={signInWithTwitter} type="button">Twitter</button> */}
      </div>
      <div className="g-col">
        <form className="task-form">
          <input className="task-form__input" ref={email => this.email = email} placeholder="Email" />
          <input type="password" className="task-form__input" placeholder="Password" ref={pw => this.pw = pw} />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignIn);
