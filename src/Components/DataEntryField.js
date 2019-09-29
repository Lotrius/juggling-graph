import React, { Component } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

class DataEntryField extends Component {
  // When data is entered into the input field
  submitData = event => {
    const { updateDailyData } = this.props;

    event.preventDefault(); // Prevent page from refreshing when submitted

    const num = parseInt(event.target[0].value, 10); // Get value
    event.target.reset(); // Reset field

    updateDailyData(num);
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  render() {
    const guest = localStorage.getItem('guest');
    const sandbox = localStorage.getItem('sandbox');

    // Which button did the user press at the start
    let state = '';
    if (guest === 'true') {
      state = '(disabled as guest)';
    }

    if (sandbox === 'true') {
      state = '(sandbox)';
    }

    return (
      // Form
      <form onSubmit={this.submitData}>
        <div className="">
          {/* Input field */}
          <div>
            <input
              className={`f6 mb2 input-reset fl black-80 pa3 lh-solid w-100 w-75-m w-80-l br3 b--black ${
                guest === 'true' ? 'bg-moon-gray' : 'bg-white'
              }`}
              style={{ outline: 'none' }}
              type="number"
              placeholder={`Number of catches ${state}`}
              disabled={guest === 'true' ? true : null}
            />
          </div>

          {/* Submit button */}
          <div>
            <input
              className={`f6 button-reset pv3 tc bn bg-green hover-bg-green white w-50 w-25-m w-20-l br3 ${
                guest === 'true' ? null : 'pointer'
              }`}
              style={{ outline: 'none' }}
              type="submit"
              value="Add"
              disabled={guest === 'true' ? true : null}
            />
          </div>
        </div>
      </form>
    );
  }
}

DataEntryField.propTypes = {
  updateDailyData: PropTypes.func
};

DataEntryField.defaultProps = {
  updateDailyData: null
};

export default DataEntryField;
