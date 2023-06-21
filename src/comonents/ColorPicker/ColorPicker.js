import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionsIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionsIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              type="button"
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
