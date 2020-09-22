import React from 'react';
import PropTypes from 'prop-types';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }

  /* ////////////////////////////////////////////////////////////////////////// */

  // Get email
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Get PW
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Sign in button submitted
  onSubmitSignIn = (event, guest) => {
    event.preventDefault(); // Stop page refresh when enter is pressed

    const { signInEmail, signInPassword } = this.state;
    const { changeLoginStatus } = this.props;

    // Call to backend
    fetch('https://obscure-river-59718.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then((response) => response.json())
      .then((successVal) => {
        if (successVal === 'success') {
          changeLoginStatus(guest);
        }
      })
      // eslint-disable-next-line no-console
      .catch(() => console.log('error signing in'));
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  render() {
    const { changeLoginStatus } = this.props;

    const buttonColor = { backgroundColor: '#41A0BF' };

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <form>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend key={1} className="f1 fw6 ph0 mh0">
                  Sign In
                </legend>

                {/* Email */}
                <div key={2} className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                    <input
                      onChange={this.onEmailChange}
                      className="pa2 input-reset ba bg-light-gray hover-bg-moon-gray hover-black w-100"
                      type="email"
                      name="email-address"
                      id="email-address"
                    />
                  </label>
                </div>

                {/* PW */}
                <div key={3} className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                    <input
                      onChange={this.onPasswordChange}
                      className="b pa2 input-reset ba bg-light-gray hover-bg-moon-gray hover-black w-100"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </label>
                </div>

                {/* Sign in */}
                <div key={4}>
                  <input
                    id="signin"
                    onClick={(event) => {
                      this.onSubmitSignIn(event, 'normal');
                    }}
                    className="b ph3 pv2 input-reset ba b--black grow pointer f4 dib br3"
                    style={buttonColor}
                    type="submit"
                    value="Sign in"
                  />
                </div>
              </fieldset>
            </form>
          </div>

          {/* Sign in as guest */}
          <h1 className="mt4 tc">- OR -</h1>

          <div className="flex justify-center">
            <input
              onClick={() => changeLoginStatus('guest')}
              className="b mt3 ph3 pv2 input-reset ba b--black grow pointer f3 br3"
              type="submit"
              style={buttonColor}
              value="Enter as guest"
            />
          </div>

          {/* Sign into sandbox */}
          <h1 className="mt4 tc">- OR -</h1>

          <div className="flex justify-center">
            <input
              onClick={() => changeLoginStatus('sandbox')}
              className="b mt3 ph3 pv2 input-reset ba b--black grow pointer f3 br3"
              type="submit"
              style={buttonColor}
              value="Enter sandbox"
            />
          </div>

          {/* Descriptions */}
          <div className="flex flex-column mt3">
            <p className="">
              Signing in as a guest means you can see my progress but will be
              unable to add any data.
            </p>
            <p>
              Sandbox allows you to play around, but none of your data will be
              saved.
            </p>
            <p className="">
              Registration is currently not an option. It may also never be an
              option.
            </p>
          </div>
        </main>
      </article>
    );
  }
}

SignIn.propTypes = {
  changeLoginStatus: PropTypes.func
};

SignIn.defaultProps = {
  changeLoginStatus: null
};

export default SignIn;
