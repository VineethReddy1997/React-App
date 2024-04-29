import React, { Component } from 'react';
import Textinput from './fields/Textinput';
import Dropdown from './fields/Dropdown'; 
import Checkbox from './fields/Checkbox'; 

class Element extends Component {
  render() {
    const { field } = this.props;
    const { id, label, dataType, value, optionList } = field;

    switch (dataType) {
      case 'string':
      case 'number':
      case 'email':
      case 'password':
      case 'date':
      case 'textarea':
        return (
          <Textinput
            field_id={id}
            field_label={label}
            field_value={value}
          />
        );
      case 'select':
      case 'multiselect':
        return (
          <Dropdown
            field_id={id}
            field_label={label}
            field_value={value}
            field_optionList={optionList}
            multiple={dataType === 'multiselect'}
          />
        );
      case 'checkbox': 
        return (
          <Checkbox
            field_id={id}
            field_label={label}
            field_value={value}
          />
        );
      case 'radio':
        return null;
      default:
        return null;
    }
  }
}

export default Element;
