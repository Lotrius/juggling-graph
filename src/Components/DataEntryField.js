import React, { Component } from 'react';
import './Input.css'

class DataEntryField extends Component {
    render() {
        const { guest } = this.props;

        return (
            // Form
            <form onSubmit={this.submitData}>
                <div className=''>

                    {/* Input field */}
                    <div>
                        <input
                            className={`f6 mb2 input-reset fl black-80 pa3 lh-solid w-100 w-75-m w-80-l br3 b--black ${guest === 'true' ? 'bg-moon-gray' : 'bg-white'}`}
                            style={{outline: 'none'}}
                            type='number'
                            placeholder={`Number of catches ${guest === 'true' ? '(disabled as guest)' : ''}`}
                            ref="input"
                            disabled={guest === 'true' ? true : null}
                        />
                    </div>

                    {/* Submit button */}
                    <div>
                        <input
                            className={`f6 button-reset pv3 tc bn bg-green hover-bg-green white w-50 w-25-m w-20-l br3 ${guest === 'true' ? null : 'pointer'}`}
                            style={{outline: 'none'}}
                            type='submit'
                            value='Add'
                            disabled={guest === 'true' ? true : null}
                        />
                    </div>
                </div>
            </form>
        );
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // When data is entered into the input field
    submitData = (event) => {
        event.preventDefault(); // Prevent page from refreshing when submitted

        const num = parseInt(this.refs.input.value, 10); // Get value

        // If value is actually a number update daily data and clear text field
        // Otherwise just clear text field and nothing else
        if (isNaN(num)) {
            this.refs.input.value = '';
        } else {
            this.refs.input.value = '';
            this.props.updateDailyData(num);
        }
    }
}

export default DataEntryField;