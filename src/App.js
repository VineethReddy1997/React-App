import React, { Component } from 'react';
import DynamicFieldGenerator from './components/DynamicFieldGenerator'; // Changed import path for DynamicFieldGenerator
import { FormContext } from './FormContext';
import formData from './data.json'; // Changed import and file name to data.json

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: null
    };
  }

  componentDidMount() {
    if (formData && formData.length > 0 && formData[0].data && formData[0].data.panels) {
      this.setState({ elements: formData[0].data });
    } else {
      console.error("Invalid JSON data structure");
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.elements);
  };
  
  handleChange = (id, event) => {
    const { elements } = this.state;
    if (!elements) return; 

    const newElements = { ...elements };
    newElements.panels.forEach((panel) => {
      panel.attributes.forEach((field) => {
        if (id === field.id) {
          switch (field.dataType) {
            case 'checkbox':
              field.value = event.target.checked;
              break;
            default:
              field.value = event.target.value;
              break;
          }
        }
      });
    });
    this.setState({ elements: newElements });
  };

  render() {
    const { elements } = this.state;

    return (
      <FormContext.Provider value={{ handleChange: this.handleChange }}>
        <div className="App container">
          {elements && (
            <>
              <h3>{elements.formTitle}</h3>
              <form>
                {elements.panels.map((panel) => (
                  <div key={panel.id}>
                    {panel.attributes.map((field) => (
                      <DynamicFieldGenerator key={field.id} field={field} />
                    ))}
                  </div>
                ))}
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </form>
            </>
          )}
        </div>
      </FormContext.Provider>
    );
  }
}

export default App;
