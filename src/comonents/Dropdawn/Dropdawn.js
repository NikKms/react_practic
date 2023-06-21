import React, { Component } from 'react';
import './Dropdawn.css';

export class Dropdawn extends Component {
  state = {
    visible: false,
  };

  toggle = () =>
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdawn">
        <button
          type="button"
          className="Dropdawn__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className="Dropdawn__menu">Выпадающее меню</div>}
      </div>
    );
  }
}
