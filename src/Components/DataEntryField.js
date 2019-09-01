import React, { Component } from 'react';

class DataEntryField extends Component {
    render() {
        return (
            // Form
            <form onSubmit={this.submitData}>
                <div className='cf'>
                    
                    {/* Input field */}
                    <div>
                        <input
                            className='f6 f5-l input-reset fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns b--black'
                            type='text'
                            placeholder='Number of catches'
                            ref="input"
                        />
                    </div>

                    {/* Submit button */}
                    <div>
                        <input
                            className='f6 f5-l button-reset fl pv3 tc bn bg-green hover-bg-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns'
                            type='submit'
                            value='Add'
                        />
                    </div>
                </div>
            </form>
        );
    }

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