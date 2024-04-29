import React, { Component } from 'react';
import { FormContext } from '../../FormContext';

class Textinput extends Component {
  static contextType = FormContext;

  render() {
    const { field_id, field_label, field_value } = this.props;
    const { handleChange } = this.context;

    return (
      <div className="mb-3">
        <label htmlFor={`input_${field_id}`} className="form-label">{field_label}</label>
        <input
          type={field_label === "Role Start Date" || field_label === "Role End Date" ? "date" : "text"}
          className="form-control"
          id={`input_${field_id}`}
          value={field_value}
          onChange={(event) => handleChange(field_id, event)}
        />
      </div>
    );
  }
}

export default Textinput;
