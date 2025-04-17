import React, { Component } from "react";
import { Container, Row, Col, button } from "reactstrap";

class KelasComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumlah: 0,
    };
  }

  tambahProduk = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  render() {
    return (
      
        <div style={{ marginLeft: "20px", marginTop: "5px" }}>
          <h1>{this.state.jumlah}</h1>
          <button onClick={this.tambahProduk}>Tambah Product</button>
        </div>
 
    );
  }
}

export default KelasComp;
