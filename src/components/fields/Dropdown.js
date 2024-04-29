import React, { Component } from 'react';
import { FormContext } from '../../FormContext';

class Dropdown extends Component {
  static contextType = FormContext;

  render() {
    const { field_id, field_label, field_value, field_optionList } = this.props;
    const { handleChange } = this.context;

    // Check if field_optionList is null, and set options accordingly
    const options = field_optionList ? field_optionList.split(',').map(option => option.trim()) : [];

    return (
      <div className="mb-3">
        <label htmlFor={`select_${field_id}`} className="form-label">{field_label}</label>
        <select
          className="form-select"
          id={`select_${field_id}`}
          value={field_value}
          onChange={(event) => handleChange(field_id, event)}
        >
          <option value="">Select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
