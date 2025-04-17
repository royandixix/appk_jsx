import React, { Component } from 'react';
import "./css/Produk.css"

export default class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
        stock: this.props.stock,
        sub: "Beli",
        status: "Tersedia",
        disabled:false 

    }
  }

  ButtonBeli = () => {
    this.setState ({
      stock: this.state.stock -1
    })
    if(this.state.stock ===1){
      this.setState({
        status: "Habis",
        disabled :true
        

      })
    }
  }

  render() {
    return (
      <div className="box-stock">
        <h2><b>{this.props.nama}</b></h2>
        <h3 className=''></h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/MacBook_Pro_15_inch_%282017%29_Touch_Bar.jpg/400px-MacBook_Pro_15_inch_%282017%29_Touch_Bar.jpg" alt="" />
        <p><b>Rp. {this.props.harga}</b></p>
        <p><b>{this.state.stock}</b></p>
        <button className="btn-clik" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}
 