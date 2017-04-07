import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class SelectState extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            value: []
        }
    }

    handleChange = (event, index, value) => {
        this.setState({value})
    }

    render()
    {
        return (
            <div>
                <SelectField
                    floatingLabelText="Frequency"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="Never"></MenuItem>
                    <MenuItem value={2} primaryText="Every Night"></MenuItem>
                    <MenuItem value={3} primaryText="Weeknights"></MenuItem>
                    <MenuItem value={4} primaryText="Weekends"></MenuItem>
                    <MenuItem value={5} primaryText="Weekly"></MenuItem>
                </SelectField>
            </div>
        )
    }
}

export default SelectState;
