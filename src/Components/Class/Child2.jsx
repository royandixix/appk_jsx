import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // belum ada state, masih oke
    };
  }

  render() {
    return (
      <div>
        <h3>Child2</h3>
        <GrandChild data={this.props.stock}/>
        {/* <p>{this.props.stock}</p> */}
      </div>
    );
  }
}

export default Child2;
