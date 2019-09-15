import React, { Component } from 'react';

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
                            className={`f6 input-reset fl black-80  pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns b--black ${guest === 'true' ? 'bg-moon-gray' : 'bg-white'}`}
                            type='text'
                            placeholder='Number of catches'
                            ref="input"
                            disabled={guest === 'true' ? true : null}
                        />
                    </div>

                    {/* Submit button */}
                    <div>
                        <input
                            className={`f6 button-reset fl pv3 tc bn bg-green hover-bg-green white w-100 w-25-m w-20-l br2-ns br--right-ns ${guest === 'true' ? null : 'pointer'}`}
                            type='submit'
                            value='Add'
                            disabled={this.props.guest === 'true' ? true : null}
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