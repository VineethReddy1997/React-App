import React, { Component } from 'react';
import { FormContext } from '../../FormContext';

class Checkbox extends Component {
  static contextType = FormContext;

  render() {
    const { field_id, field_label, field_value } = this.props;
    const { handleChange } = this.context;

    return (
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id={`checkbox_${field_id}`}
          checked={field_value}
          onChange={(event) => handleChange(field_id, event)}
        />
        <label htmlFor={`checkbox_${field_id}`} className="form-check-label">{field_label}</label>
      </div>
    );
  }
}

export default Checkbox;
