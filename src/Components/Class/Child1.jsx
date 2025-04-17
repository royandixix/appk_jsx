import React, { Component } from "react";
import "./css/Produk.css"

class Child1 extends Component {
    constructor(props) {
        super(props);

        this.state= {
            // bisa tambah state di sini kalau perlu
        };
    }

    minBeli = 1;
    render()    {
        return (
            <div>
                <h3>Child Component</h3>
                <p className=" material-symbols-rounded"></p>
                <p>{this.props.stock}</p> {/* sebelumnya "stok", diganti jadi "stock" */}
                <button onClick={() => this.props.fungsi(this.minBeli)}>Beli</button>
             </div>
        ); 
    }
}

export default Child1
