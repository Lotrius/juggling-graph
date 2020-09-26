import React, { Component } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

// Get current login state
const guest = JSON.parse(localStorage.getItem('guest'));
const sandbox = JSON.parse(localStorage.getItem('sandbox'));

class DataEntryField extends Component {
  constructor() {
    super();
    this.state = {
      loginState: ''
    };
  }

  /**
   * Update login state once components mount
   */
  componentDidMount() {
    // Set login state based on how user logged in
    if (guest) {
      this.setState({ loginState: '(disabled as guest)' });
    } else if (sandbox) {
      this.setState({ loginState: '(sandbox)' });
    }

    // UPDATEEE
    this.forceUpdate();
  }

  /**
   * When add button is pressed, submit data
   *
   * @param {Object} event
   */
  submitData = (event) => {
    const { updateDailyData } = this.props;

    event.preventDefault(); // Prevent page from refreshing when submitted

    const num = parseInt(event.target[0].value, 10); // Get value
    event.target.reset(); // Reset field

    updateDailyData(num);
  };

  undoData = (event) => {
    const { deletePopup } = this.props;

    event.preventDefault(); // Prevent page from refreshing when submitted

    deletePopup();
  };

  /**
   * Render entry field
   */
  render() {
    const { loginState } = this.state;

    return (
      // Form
      <div>
        <form onSubmit={this.submitData}>
          <div>
            {/* Input field */}
            <div>
              <input
                className={`f6 mb2 input-reset fl black-80 pa3 lh-solid w-100 w-75-m w-80-l br3 b--black ${
                  guest ? 'bg-moon-gray' : 'bg-white'
                }`}
                style={{ outline: 'none' }}
                type="number"
                placeholder={`Number of catches ${loginState}`}
                disabled={guest || null}
              />
            </div>

            {/* Submit button */}
            <div>
              <input
                className={`f6 button-reset pv3 tc bn bg-green hover-bg-dark-green white w-50 w-25-m w-20-l br3 ${
                  guest ? null : 'pointer'
                }`}
                style={{ outline: 'none' }}
                type="submit"
                value="Add"
                disabled={guest || null}
              />
            </div>
          </div>
        </form>

        {/* Undo button */}
        <form onSubmit={this.undoData}>
          <div className="mt3">
            <input
              className={`f6 button-reset pv3 tc bn bg-red hover-bg-dark-red white w-50 w-25-m w-20-l br3 ${
                guest ? null : 'pointer'
              }`}
              // Prevent pressing by enter button just in case
              onKeyPress={(event) => {
                event.preventDefault();
              }}
              style={{ outline: 'none' }}
              type="submit"
              value="Undo"
              disabled={guest || null}
            />
          </div>
        </form>
      </div>
    );
  }
}

DataEntryField.propTypes = {
  updateDailyData: PropTypes.func,
  deletePopup: PropTypes.func
};

DataEntryField.defaultProps = {
  updateDailyData: null,
  deletePopup: PropTypes.func
};

export default DataEntryField;
